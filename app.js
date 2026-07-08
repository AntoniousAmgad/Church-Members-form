const GAS_URL = 'https://test-app-sigma-puce.vercel.app/api/proxy?url=https://script.google.com/macros/s/AKfycby3qCpwPdRkKE1qZir7FcQH7wdWT3sBkOhgZ7CWsmY8hYjyyTcgJ91L6OQkyd9MMgCMSQ/exec';

// ── Translations ──────────────────────────────────────────────────────────────
const translations = {
  en: {
    bannerTitle: 'Rover Team',
    bannerSub: 'Enrollment Form',
    tagline: 'Be Prepared .. To Serve God, Church & Country',
    section1: 'Personal Information',
    fullName: 'Full Name:',
    fullNamePh: 'Full Name',
    dob: 'Date of Birth:',
    address: 'Address:',
    phone: 'Phone Number:',
    email: 'Email:',
    section2: 'Scout Information',
    isScoutQ: 'Are you currently a scout member?',
    yes: 'Yes',
    no: 'No',
    rankQ: 'Scout Rank (if any):',
    novice: 'Novice',
    scoutRank: 'Scout',
    tenderfoot: 'Tenderfoot',
    rover: 'Rover',
    scoutYears: 'Years of Scouting Experience:',
    years: 'years',
    scoutActivities: 'Main Activities you have participated in:',
    section3: 'Skills & Hobbies',
    leadership: 'Leadership',
    firstAid: 'First Aid',
    camping: 'Camping',
    cooking: 'Cooking',
    mapReading: 'Map Reading',
    handicrafts: 'Handicrafts',
    photography: 'Photography',
    other: 'Other:',
    hobbies: 'Hobbies:',
    section4: 'Scouting Questions',
    q1: 'Why do you want to join the Rover Team?',
    q2: 'What can you contribute to the team?',
    commitQ: 'Can you commit to meetings, trips and activities?',
    sometimes: 'Sometimes',
    q4: 'Any other information you would like to add?',
    section5: 'Commitment & Agreement',
    agreementText: 'I hereby declare that the above information is correct, and I commit to abide by the rules, values and mission of the Rover Team.',
    agreeName: 'Name:',
    agreeSignature: 'Signature:',
    agreeDate: 'Date:',
    submitBtn: 'Save Member',
    loading: 'Saving…',
    toggleLang: 'عربي',
    errFullName: 'Please enter your full name (first and last).',
    errDob: 'Please enter your date of birth.',
    errAddress: 'Please enter your address.',
    errPhone: 'Please enter your phone number.',
    errEmail: 'Please enter a valid email address.',
    errScout: 'Please indicate whether you are currently a scout member.',
    errScoutYears: 'Please enter your years of scouting experience.',
    errActivities: 'Please enter the main activities you have participated in.',
    errHobbies: 'Please enter your skills and/or hobbies.',
    errWhyJoin: 'Please answer why you want to join the Rover Team.',
    errContribute: 'Please answer what you can contribute to the team.',
    errCommit: 'Please answer whether you can commit to meetings and activities.',
    errAgreeName: 'Please enter your name in the agreement section.',
    errSignature: 'Please enter your signature in the agreement section.',
    errAgreeDate: 'Please enter the date in the agreement section.',
    successMsg: 'Member saved successfully.',
    errorMsg: 'Unable to save member. Please try again later.',
  },
  ar: {
    bannerTitle: 'فريق الجوالة',
    bannerSub: 'استمارة التسجيل',
    tagline: 'كن مستعداً .. لخدمة الله والكنيسة والوطن',
    section1: 'المعلومات الشخصية',
    fullName: 'الاسم الكامل:',
    fullNamePh: 'الاسم الكامل',
    dob: 'تاريخ الميلاد:',
    address: 'العنوان:',
    phone: 'رقم الهاتف:',
    email: 'البريد الإلكتروني:',
    section2: 'معلومات الكشافة',
    isScoutQ: 'هل أنت عضو في الكشافة حالياً؟',
    yes: 'نعم',
    no: 'لا',
    rankQ: 'رتبة الكشافة (إن وجدت):',
    novice: 'مبتدئ',
    scoutRank: 'كشاف',
    tenderfoot: 'أول',
    rover: 'جوال',
    scoutYears: 'سنوات الخبرة في الكشافة:',
    years: 'سنوات',
    scoutActivities: 'الأنشطة الرئيسية التي شاركت فيها:',
    section3: 'المهارات والهوايات',
    leadership: 'قيادة',
    firstAid: 'إسعافات أولية',
    camping: 'تخييم',
    cooking: 'طبخ',
    mapReading: 'قراءة خرائط',
    handicrafts: 'حرف يدوية',
    photography: 'تصوير',
    other: 'أخرى:',
    hobbies: 'الهوايات:',
    section4: 'أسئلة الكشافة',
    q1: 'لماذا تريد الانضمام إلى فريق الجوالة؟',
    q2: 'ما الذي يمكنك تقديمه للفريق؟',
    commitQ: 'هل يمكنك الالتزام بالاجتماعات والرحلات والأنشطة؟',
    sometimes: 'أحياناً',
    q4: 'هل هناك أي معلومات أخرى تود إضافتها؟',
    section5: 'الالتزام والاتفاقية',
    agreementText: 'أُقر بأن المعلومات المذكورة أعلاه صحيحة، وأتعهد بالالتزام بقواعد وقيم ورسالة فريق الجوالة.',
    agreeName: 'الاسم:',
    agreeSignature: 'التوقيع:',
    agreeDate: 'التاريخ:',
    submitBtn: 'حفظ العضو',
    loading: 'جارٍ الحفظ…',
    toggleLang: 'English',
    errFullName: 'يرجى إدخال الاسم الكامل (الأول والأخير).',
    errDob: 'يرجى إدخال تاريخ الميلاد.',
    errAddress: 'يرجى إدخال العنوان.',
    errPhone: 'يرجى إدخال رقم الهاتف.',
    errEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
    errScout: 'يرجى تحديد ما إذا كنت عضواً في الكشافة حالياً.',
    errScoutYears: 'يرجى إدخال سنوات الخبرة في الكشافة.',
    errActivities: 'يرجى إدخال الأنشطة الرئيسية التي شاركت فيها.',
    errHobbies: 'يرجى إدخال مهاراتك و/أو هواياتك.',
    errWhyJoin: 'يرجى الإجابة عن سبب رغبتك في الانضمام إلى فريق الجوالة.',
    errContribute: 'يرجى الإجابة عما يمكنك تقديمه للفريق.',
    errCommit: 'يرجى الإجابة عن مدى قدرتك على الالتزام بالاجتماعات والأنشطة.',
    errAgreeName: 'يرجى إدخال اسمك في قسم الاتفاقية.',
    errSignature: 'يرجى إدخال توقيعك في قسم الاتفاقية.',
    errAgreeDate: 'يرجى إدخال التاريخ في قسم الاتفاقية.',
    successMsg: 'تم حفظ العضو بنجاح.',
    errorMsg: 'تعذر حفظ العضو. يرجى المحاولة مرة أخرى لاحقاً.',
  }
};

// ── Language toggle ───────────────────────────────────────────────────────────
let currentLang = 'en';

function applyLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if(t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-placeholder-key]').forEach(el => {
    const key = el.getAttribute('data-placeholder-key');
    if(t[key] !== undefined) el.placeholder = t[key];
  });

  document.getElementById('langToggle').textContent = t.toggleLang;
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyLanguage(currentLang);
});

// ── Form ─────────────────────────────────────────────────────────────────────
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
  const t = translations[currentLang];

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

  if(!data.firstName || !data.lastName){ showMessage(t.errFullName, 'error'); return; }
  if(!data.birthday){ showMessage(t.errDob, 'error'); return; }
  if(!data.address){ showMessage(t.errAddress, 'error'); return; }
  if(!data.phone){ showMessage(t.errPhone, 'error'); return; }
  if(!data.email || !validateEmail(data.email)){ showMessage(t.errEmail, 'error'); return; }
  if(data.scout.isMember === null){ showMessage(t.errScout, 'error'); return; }
  if(!data.scout.years && data.scout.years !== 0){ showMessage(t.errScoutYears, 'error'); return; }
  if(!data.scout.activities){ showMessage(t.errActivities, 'error'); return; }
  if(!data.hobbies){ showMessage(t.errHobbies, 'error'); return; }
  if(!data.questions.whyJoin){ showMessage(t.errWhyJoin, 'error'); return; }
  if(!data.questions.contribute){ showMessage(t.errContribute, 'error'); return; }
  if(!data.questions.canCommit){ showMessage(t.errCommit, 'error'); return; }
  if(!data.agreement.name){ showMessage(t.errAgreeName, 'error'); return; }
  if(!data.agreement.signature){ showMessage(t.errSignature, 'error'); return; }
  if(!data.agreement.date){ showMessage(t.errAgreeDate, 'error'); return; }

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  showLoading(true);

  try{
    const resp = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if(!resp.ok) throw new Error('Network response was not ok');

    const result = await resp.json();
    if(result && (result.status === 'success' || result.result === 'success')){
      showMessage(t.successMsg, 'success');
      form.reset();
    } else {
      throw new Error(result && result.message ? result.message : 'Unknown error from server');
    }
  } catch(err){
    console.error(err);
    showMessage(t.errorMsg, 'error');
  } finally{
    submitBtn.disabled = false;
    showLoading(false);
  }
});
