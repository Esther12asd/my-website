function startAssessment() {
    alert('测评功能即将上线！\n\n这是一个演示页面，完整的测评系统正在开发中。\n\n功能包括：\n✓ AI 动态出题\n✓ 多维度潜能分析\n✓ 职业方向推荐\n✓ 全球高校专业指引');
}

// 添加滚动动画效果
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有 feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });
});
