const validateForm = (name: string, value: string) => {
  const errors: { [key: string]: string } = {};

  switch (name) {
    case 'name':
    case 'lastName': {
      const persianNameRegex = /^[آ-ی\s]+$/;
      if (!value) {
        errors[name] = 'وارد کردن فیلد الزامی است.';
      } else if (!persianNameRegex.test(value)) {
        errors[name] = 'فقط حروف فارسی مجاز هستند.';
      }
      break;
    }
    case 'phoneNumber': {
      const phoneNumberRegex = /^09\d{9}$/;
      if (!value) {
        errors[name] = 'وارد کردن فیلد الزامی است.';
      } else if (!phoneNumberRegex.test(value)) {
        errors[name] = 'شماره تماس معتبر نمی‌باشد.';
      }
      break;
    }
    case 'password': {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,10}$/;
      if (!value) {
        errors[name] = 'وارد کردن فیلد الزامی است.';
      } else if (!passwordRegex.test(value)) {
        errors[name] = 'رمز ورود باید شامل حداقل یک عدد، یک حرف کوچک، یک حرف بزرگ باشد و بین ۴ تا ۱۰ کاراکتر داشته باشد.';
      }
      break;
    }
    default:
      if (!value) {
        errors[name] = 'وارد کردن فیلد الزامی است.';
      }
      break;
  }

  return errors;
};

export default validateForm;