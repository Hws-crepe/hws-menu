/* ============================================================================
   إعدادات Firebase — المكان الوحيد الذي تضع فيه قيم مشروعك
   ----------------------------------------------------------------------------
   انسخ القيم من: لوحة Firebase ← ⚙️ Project settings ← General ← Your apps ← Web app
   هذه القيم ليست سرّية (تظهر في أي موقع يستخدم Firebase)؛ الحماية الفعلية
   تأتي من قواعد الأمان في ملف firestore.rules.
   ⚠️ لا تضع كلمة سر الأدمن هنا ولا في أي ملف آخر.
   ============================================================================ */
export const firebaseConfig = {
  apiKey:            "AIzaSyCtqzwJMdxnPZeNE0g8h55IY3DyTnuHs8U",
  authDomain:        "resturant-app-190c1.firebaseapp.com",
  projectId:         "resturant-app-190c1",
  storageBucket:     "resturant-app-190c1.firebasestorage.app",
  messagingSenderId: "1065831699349",
  appId:             "1:1065831699349:web:e67211b909b89cc37e9c9c"
};

/* نسخة مكتبة Firebase (Modular SDK) من CDN */
export const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/13.0.0";

/* هل وُضعت القيم الحقيقية؟ قبل ذلك يعمل المنيو عادياً وكل الأصناف متوفرة */
export const firebaseReady = () =>
  !!firebaseConfig.apiKey && !String(firebaseConfig.apiKey).startsWith("YOUR_") &&
  !String(firebaseConfig.projectId).startsWith("YOUR_");
