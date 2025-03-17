// Intersection Observer配置
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            // 动画延迟触发
            entry.target.querySelectorAll('.chapter-title').forEach(title => {
                title.style.transitionDelay = '0.2s';
            });
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});