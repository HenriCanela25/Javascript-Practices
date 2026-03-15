// Fill breakfast menu

const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((food, i) => `<p>Item ${i+1}: ${food}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Main course menu

let mainCourseItem = '';

mainCourseMenu.forEach((food, i) => {
    mainCourseItem += `<p>Item ${i+1}: ${food}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Dessert menu

let dessertMenuItem = '';

for (let i = 0; i < dessertMenu.length; i++){
    dessertMenuItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}

document.getElementById('dessertMenuItems').innerHTML = dessertMenuItem;