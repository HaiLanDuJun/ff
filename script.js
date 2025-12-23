// 加载教程内容
function loadTutorial(tutorialKey) {
    const tutorial = tutorials[tutorialKey];
    if (!tutorial) {
        return;
    }

    const contentDiv = document.getElementById('tutorial-content');
    contentDiv.innerHTML = tutorial.content;

    // 平滑滚动到内容区域
    contentDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 更新页面标题
    document.title = `${tutorial.title} - 芳芳的测试之路`;
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('芳芳的测试之路 - Python教程网站已加载');
});

