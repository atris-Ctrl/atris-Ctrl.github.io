
function showTab(category) {
    // 314eaa
    const tabsButton = document.querySelectorAll('.tab-button');
    const projectContents = document.querySelectorAll('.tab-content');
    projectContents.forEach(content => {
        content.style.display = 'none';
    });
    tabsButton.forEach(content => {
        content.style.backgroundColor = '#314eaa';
    });
    const selectedTab = document.getElementById(`${category}-tab`);
    const selectedCategory = document.getElementById(`${category}`);

    selectedTab.style.backgroundColor = '#506fb0';
    selectedCategory.style.display = 'block';
    selectedCategory.classList.add('animate-fadeIn');

}


function typeText(element, text, delay = 100) {
    let index = 0;
    const interval = setInterval(function() {
      element.textContent += text.charAt(index);
      index++;
      if (index > text.length) {
        clearInterval(interval);
      }
    }, delay);
}