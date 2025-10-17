# روابط تحميل الصور - Image Download Links

## 🖼️ **روابط الصور الأصلية من Unsplash**

### **صور البانر (Hero Images)**

#### 1. **صورة البانر الرئيسي (Home Page)**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070`
- **الملف المحلي:** `src/assets/images/hero-farming.jpg`
- **الوصف:** صورة مزارع في الحقل مع سلة مليئة بالفلفل والجزر

#### 2. **صورة صفحة من نحن (About Page)**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073`
- **الملف المحلي:** `src/assets/images/about-hero.jpg`
- **الوصف:** صورة مجموعة من الأشخاص في ورشة عمل

#### 3. **صورة صفحة المشاريع (Projects Page)**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070`
- **الملف المحلي:** `src/assets/images/projects-hero.jpg`
- **الوصف:** صورة مزارع في الحقل مع أدوات الزراعة

#### 4. **صورة صفحة المركز الإعلامي (Media Page)**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074`
- **الملف المحلي:** `src/assets/images/media-hero.jpg`
- **الوصف:** صورة مجموعة من الأشخاص في اجتماع

#### 5. **صورة صفحة اتصل بنا (Contact Page)**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074`
- **الملف المحلي:** `src/assets/images/contact-hero.jpg`
- **الوصف:** صورة شخص يعمل على الكمبيوتر

### **صور المعرض (Gallery Images)**

#### 1. **صورة المعرض 1**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070`
- **الملف المحلي:** `src/assets/images/gallery-1.jpg`
- **الوصف:** تدريب المزارعين على التقنيات الحديثة

#### 2. **صورة المعرض 2**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031`
- **الملف المحلي:** `src/assets/images/gallery-2.jpg`
- **الوصف:** تمكين المرأة الريفية

#### 3. **صورة المعرض 3**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073`
- **الملف المحلي:** `src/assets/images/gallery-3.jpg`
- **الوصف:** ورشة بناء السلام

#### 4. **صورة المعرض 4**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070`
- **الملف المحلي:** `src/assets/images/gallery-4.jpg`
- **الوصف:** الزراعة المستدامة

#### 5. **صورة المعرض 5**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070`
- **الملف المحلي:** `src/assets/images/gallery-5.jpg`
- **الوصف:** توزيع البذور المحسنة

#### 6. **صورة المعرض 6**
- **الرابط الأصلي:** `https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074`
- **الملف المحلي:** `src/assets/images/gallery-6.jpg`
- **الوصف:** مشاريع المرأة الصغيرة

## 📥 **طريقة التحميل**

### **الطريقة الأولى: التحميل المباشر**
1. انقر على كل رابط أعلاه
2. انقر بزر الماوس الأيمن على الصورة
3. اختر "حفظ الصورة باسم"
4. احفظها بالاسم المحدد في المجلد `src/assets/images/`

### **الطريقة الثانية: استخدام wget أو curl**
```bash
# تحميل صورة البانر الرئيسي
wget "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070" -O src/assets/images/hero-farming.jpg

# تحميل صورة صفحة من نحن
wget "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073" -O src/assets/images/about-hero.jpg

# تحميل صورة صفحة المشاريع
wget "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070" -O src/assets/images/projects-hero.jpg

# تحميل صورة صفحة المركز الإعلامي
wget "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074" -O src/assets/images/media-hero.jpg

# تحميل صورة صفحة اتصل بنا
wget "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074" -O src/assets/images/contact-hero.jpg

# تحميل صور المعرض
wget "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070" -O src/assets/images/gallery-1.jpg
wget "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031" -O src/assets/images/gallery-2.jpg
wget "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073" -O src/assets/images/gallery-3.jpg
wget "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070" -O src/assets/images/gallery-4.jpg
wget "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070" -O src/assets/images/gallery-5.jpg
wget "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074" -O src/assets/images/gallery-6.jpg
```

### **الطريقة الثالثة: استخدام PowerShell (Windows)**
```powershell
# تحميل صورة البانر الرئيسي
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070" -OutFile "src/assets/images/hero-farming.jpg"

# تحميل صورة صفحة من نحن
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073" -OutFile "src/assets/images/about-hero.jpg"

# تحميل صورة صفحة المشاريع
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070" -OutFile "src/assets/images/projects-hero.jpg"

# تحميل صورة صفحة المركز الإعلامي
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074" -OutFile "src/assets/images/media-hero.jpg"

# تحميل صورة صفحة اتصل بنا
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074" -OutFile "src/assets/images/contact-hero.jpg"

# تحميل صور المعرض
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070" -OutFile "src/assets/images/gallery-1.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031" -OutFile "src/assets/images/gallery-2.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073" -OutFile "src/assets/images/gallery-3.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070" -OutFile "src/assets/images/gallery-4.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070" -OutFile "src/assets/images/gallery-5.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074" -OutFile "src/assets/images/gallery-6.jpg"
```

## 🎯 **ملخص الروابط**

### **صور البانر:**
1. `https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070` → `hero-farming.jpg`
2. `https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073` → `about-hero.jpg`
3. `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070` → `projects-hero.jpg`
4. `https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074` → `media-hero.jpg`
5. `https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074` → `contact-hero.jpg`

### **صور المعرض:**
1. `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070` → `gallery-1.jpg`
2. `https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031` → `gallery-2.jpg`
3. `https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073` → `gallery-3.jpg`
4. `https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070` → `gallery-4.jpg`
5. `https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070` → `gallery-5.jpg`
6. `https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074` → `gallery-6.jpg`

## ✅ **بعد التحميل**

بعد تحميل جميع الصور، تأكد من:
1. حفظ الصور في المجلد الصحيح: `src/assets/images/`
2. استخدام الأسماء الصحيحة للصور
3. اختبار الموقع للتأكد من ظهور الصور
4. التحقق من عمل جميع الصفحات

## 🚀 **النتيجة**

بعد تحميل الصور، ستحصل على:
- ✅ صور عالية الجودة
- ✅ تحميل سريع
- ✅ عدم الاعتماد على الإنترنت
- ✅ تحكم كامل في المحتوى

