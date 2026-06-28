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

form.addEventListener('submit', async (e) =>{
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

  const email = sanitize(form.email ? form.email.value : '');

  if(!firstName || !lastName){
    showMessage('Please enter full name (first and last).', 'error');
    return;
  }
  if(!validateEmail(email)){
    showMessage('Please enter a valid email address.', 'error');
    return;
  }

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  showLoading(true);

  try{
    const resp = await fetch(GAS_URL, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ firstName, lastName, email })
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
  }catch(err){
    console.error(err);
    showMessage('Unable to save member. Please try again later.', 'error');
  }finally{
    submitBtn.disabled = false;
    showLoading(false);
  }
});
