document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الإرسال الافتراضي
    
    // Validation بسيطة
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const datetime = document.getElementById('datetime').value;
    
    if (!name || !phone || !service || !datetime) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // التحقق من رقم الهاتف (بسيط: يجب أن يكون أرقام فقط)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (numbers only).');
        return;
    }
    
    // التحقق من التاريخ (يجب أن يكون في المستقبل)
    const selectedDate = new Date(datetime);
    const now = new Date();
    if (selectedDate <= now) {
        alert('Please select a date and time in the future.');
        return;
    }
    
    // إرسال البيانات باستخدام fetch (AJAX)
    const formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success: أظهر الرسالة وأعد تعيين الفورم
            document.getElementById('success-message').classList.remove('hidden');
            this.reset();
        } else {
            alert('Oops! There was a problem submitting your form. Please try again.');
        }
    })
    .catch(error => {
        alert('Oops! There was a problem submitting your form. Please try again.');
    });
});
