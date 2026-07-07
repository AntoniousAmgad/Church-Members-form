const GAS_URL = 'https://test-app-sigma-puce.vercel.app/api/proxy?url=https://script.google.com/macros/s/AKfycby3qCpwPdRkKE1qZir7FcQH7wdWT3sBkOhgZ7CWsmY8hYjyyTcgJ91L6OQkyd9MMgCMSQ/exec';

const form = document.getElementById('memberForm');
const loading = document.getElementById('loading');
const message = document.getElementById('message');

function sanitize(str){
  if(!str) return '';
  return String(str).trim().replace(/[<>]/g,'');
}

function validateEmail(email){
  if(!email) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showLoading(show){
  loading.style.display = show ? 'block' : 'none';
}

function showMessage(text, type='success'){
  message.textContent = text;
  message.className = 'message ' + (type === 'success' ? 'success' : 'error');
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  showMessage('');

  let firstName = '';
  let lastName = '';
  if(form.fullName && form.fullName.value.trim()){
    const parts = form.fullName.value.trim().split(/\s+/);
    firstName = sanitize(parts.shift() || '');
    lastName = sanitize(parts.join(' '));
  } else {
    firstName = sanitize((form.firstName && form.firstName.value) || '');
    lastName = sanitize((form.lastName && form.lastName.value) || '');
  }

  const day   = form['dob-day']   ? sanitize(form['dob-day'].value)   : '';
  const month = form['dob-month'] ? sanitize(form['dob-month'].value) : '';
  const year  = form['dob-year']  ? sanitize(form['dob-year'].value)  : '';
  let birthday = '';
  if(day || month || year){
    const dd = day.padStart(2, '0');
    const mm = month.padStart(2, '0');
    birthday = year.length === 4 ? `${year}-${mm}-${dd}` : `${dd}/${mm}/${year}`;
  }

  const checkedSkills = Array.from(form.querySelectorAll('input[name="skill"]:checked')).map(i => sanitize(i.value));
  const otherSkill = form.querySelector('input[name="skillOther"]') ? sanitize(form.querySelector('input[name="skillOther"]').value) : '';
  if(otherSkill) checkedSkills.push(otherSkill);

  const aDay   = form.agreeDay   ? sanitize(form.agreeDay.value)   : '';
  const aMonth = form.agreeMonth ? sanitize(form.agreeMonth.value) : '';
  const aYear  = form.agreeYear  ? sanitize(form.agreeYear.value)  : '';
  let agreeDate = '';
  if(aDay || aMonth || aYear){
    const dd = aDay.padStart(2, '0');
    const mm = aMonth.padStart(2, '0');
    agreeDate = aYear.length === 4 ? `${aYear}-${mm}-${dd}` : `${dd}/${mm}/${aYear}`;
  }

  const data = {
    firstName,
    lastName,
    phone:    sanitize(form.phone   ? form.phone.value   : ''),
    email:    sanitize(form.email   ? form.email.value   : ''),
    address:  sanitize(form.address ? form.address.value : ''),
    birthday,
    notes:    sanitize(form.notes   ? form.notes.value   : ''),
    scout: {
      isMember:   (function(){ const r = form.querySelector('input[name="isScout"]:checked'); return r ? (r.value === 'yes') : null; })(),
      ranks:      Array.from(form.querySelectorAll('input[name="rank"]:checked')).map(i => sanitize(i.value)),
      years:      sanitize(form.scoutYears      ? form.scoutYears.value      : ''),
      activities: sanitize(form.scoutActivities ? form.scoutActivities.value : '')
    },
    hobbies: [...checkedSkills, sanitize(form.hobbies ? form.hobbies.value : '')].filter(Boolean).join(', '),
    questions: {
      whyJoin:    sanitize(form.q1 ? form.q1.value : ''),
      contribute: sanitize(form.q2 ? form.q2.value : ''),
      canCommit:  (function(){ const r = form.querySelector('input[name="commit"]:checked'); return r ? r.value : ''; })(),
      otherInfo:  sanitize(form.q4 ? form.q4.value : '')
    },
    agreement: {
      name:      sanitize(form.agreeName      ? form.agreeName.value      : ''),
      signature: sanitize(form.agreeSignature ? form.agreeSignature.value : ''),
      date:      agreeDate
    }
  };

  if(!data.firstName || !data.lastName){
    showMessage('Please enter full name (first and last).', 'error');
    return;
  }
  if(!validateEmail(data.email)){
    showMessage('Please enter a valid email address.', 'error');
    return;
  }

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  showLoading(true);

  try{
    const resp = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if(!resp.ok){
      throw new Error('Network response was not ok');
    }

    const result = await resp.json();
    if(result && (result.status === 'success' || result.result === 'success')){
      showMessage('Member saved successfully.', 'success');
      form.reset();
    } else {
      throw new Error(result && result.message ? result.message : 'Unknown error from server');
    }
  } catch(err){
    console.error(err);
    showMessage('Unable to save member. Please try again later.', 'error');
  } finally{
    submitBtn.disabled = false;
    showLoading(false);
  }
});
