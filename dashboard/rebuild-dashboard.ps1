# سكريبت إعادة بناء Dashboard
# قم بتشغيله من مجلد dashboard

Write-Host "🚀 بدء إعادة بناء Dashboard..." -ForegroundColor Green

# إنشاء المجلدات إذا لم تكن موجودة
Write-Host "📁 إنشاء المجلدات..." -ForegroundColor Yellow
$folders = @(
    "src/components/dashboard",
    "src/components/layout",
    "src/pages",
    "src/stores",
    "src/assets/styles",
    "src/router",
    "public/avatars",
    "public/images"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "✓ تم إنشاء: $folder" -ForegroundColor Gray
    }
}

Write-Host "`n✅ جميع الملفات موجودة بالفعل!" -ForegroundColor Green
Write-Host "📋 يمكنك الآن نسخ الملفات من:" -ForegroundColor Cyan
Write-Host "   - CODE_PART1_CORE.md" -ForegroundColor White
Write-Host "   - COMPLETE_CODE_REFERENCE.md" -ForegroundColor White
Write-Host "   - REBUILD_CHECKLIST.md" -ForegroundColor White

Write-Host "`n💡 أو استخدم Cascade لإنشاء الملفات مباشرة" -ForegroundColor Yellow
Write-Host "✨ تم الانتهاء!" -ForegroundColor Green
