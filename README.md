# مشروع شرح Git و GitHub

هذا المشروع مثال بسيط باستخدام HTML وCSS وJavaScript لتطبيق أوامر Git وGitHub عمليًا.

## تحميل المشروع

```bash
git clone https://github.com/ms-netizen/git-github-demo.git
cd git-github-demo
```

## فحص حالة المشروع

```bash
git status
git branch
git branch -a
git remote -v
```

## إنشاء Branch جديد

إنشاء فرع والانتقال إليه مباشرة:

```bash
git switch -c feature/my-change
```

أو بالطريقة القديمة:

```bash
git checkout -b feature/my-change
```

عرض الفروع والانتقال بينها:

```bash
git branch
git switch main
git switch feature/my-change
```

## تعديل الملفات وCommit

بعد تعديل الملفات وحفظها:

```bash
git status
git add .
git commit -m "Add my change"
```

إضافة ملف محدد فقط:

```bash
git add app.js
```

عرض سجل الـ Commits:

```bash
git log --oneline
```

## Push رفع التعديلات إلى GitHub

أول Push لفرع جديد:

```bash
git push -u origin feature/my-change
```

بعد ذلك يكفي:

```bash
git push
```

رفع فرع `main`:

```bash
git push origin main
```

## Pull تنزيل آخر التعديلات

تنزيل آخر تعديلات الفرع الحالي:

```bash
git pull
```

تنزيل تعديلات فرع `main`:

```bash
git pull origin main
```

## Merge دمج Branch مع Branch آخر

لدمج فرع `feature/my-change` داخل `main`:

```bash
git switch main
git pull origin main
git merge feature/my-change
git push origin main
```

## Pull Request على GitHub

1. ارفع الفرع إلى GitHub باستخدام `git push`.
2. افتح مستودع GitHub.
3. اختر **Pull requests** ثم **New pull request**.
4. اجعل الفرع الأساسي `main` وفرع المقارنة `feature/my-change`.
5. اضغط **Create pull request** ثم راجع التغييرات واضغط **Merge pull request**.

## مقارنة التعديلات

```bash
git diff
git diff HEAD
```

## التراجع عن التعديلات

إلغاء إضافة ملف من Stage مع إبقاء التعديل:

```bash
git restore --staged app.js
```

إلغاء تعديل غير محفوظ في ملف:

```bash
git restore app.js
```

إلغاء تعديلات كل الملفات غير المحفوظة:

```bash
git restore .
```

> انتبه: أمر `git restore` قد يحذف تعديلاتك غير المحفوظة.

## أوامر Remote

```bash
git remote -v
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
git remote remove origin
```

## التسلسل الكامل للعمل

```bash
git pull origin main
git switch -c feature/new-change

# عدّل الملفات واحفظها

git status
git add .
git commit -m "Add new change"
git push -u origin feature/new-change
```

بعد مراجعة الفرع ودمجه:

```bash
git switch main
git pull origin main
git merge feature/new-change
git push origin main
```

## الفرق بين أهم الأوامر

| الأمر | الوظيفة |
|---|---|
| `git status` | معرفة حالة الملفات |
| `git add` | تجهيز التعديلات للـ Commit |
| `git commit` | حفظ التعديل محليًا |
| `git push` | رفع التعديل إلى GitHub |
| `git pull` | تنزيل آخر تعديل من GitHub |
| `git branch` | إنشاء أو عرض الفروع |
| `git switch` | الانتقال بين الفروع |
| `git merge` | دمج فرع مع فرع آخر |
| `git log` | عرض سجل التعديلات |
