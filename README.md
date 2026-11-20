# Portfolio

موقع البورتفوليو. الصفحة كلها في `index.html`، والفيديوهات في `media/`.

## تعديل بياناتك ووسائل التواصل
افتح `config.js` وغيّر اللي بين علامتي التنصيص بس:

- `name`: اسمك
- `whatsapp`: رقمك دولي من غير + ولا مسافات (مثال 201012345678)
- `email`، `instagram`، `tiktok`، `youtube`، `linkedin`، `behance`، `x`، `calendly`

أي خانة تسيبها فاضية `""` مش هتظهر في الموقع.

**من GitHub مباشرة:** افتح الريبو ← `config.js` ← علامة القلم ✏️ ← عدّل ← **Commit changes**. الموقع بيتحدث لوحده في خلال دقيقة.

**من الكمبيوتر:** عدّل `config.js` في Notepad، وبعدين شغّل:
```
powershell -ExecutionPolicy Bypass -File D:\Remotion-Reels\portfolio-deploy.ps1
```

## إضافة فيديو جديد
1. حط فيديو mp4 مقاسه 540×960 وصورة jpg بنفس الاسم في `media/`.
2. ضيف سطر في قايمة `WORK` جوه `index.html` (انسخ أي سطر موجود وغيّر الاسم والكلام).
