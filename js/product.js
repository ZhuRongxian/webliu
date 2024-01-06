new Vue({
  el: ".app",
  data() {
    return {
      list1: [
        {
          id: 0,
          img: "img/fz1.jpg",
          name: 'Кружки "Радужная фасоль"',
          price: 799,
        },
        {
          id: 1,
          img: "img/fz2.jpg",
          name: 'Кружка "Щенок"',
          price: 699,
        },
        {
          id: 2,
          img: "img/fz3.jpg",
          name: 'Кружки "Медведь"',
          price: 799,
        },
        {
          id: 3,
          img: "img/fz4.jpg",
          name: 'Кружки "Розовые конфеты"',
          price: 559,
        },
        {
          id: 4,
          img: "img/fz5.jpg",
          name: 'Кружки "Цветок"',
          price: 599,
        },
        {
          id: 5,
          img: "img/fz6.jpg",
          name: 'Кружки "Черное и розовое"',
          price: 699,
        },
        {
          id: 6,
          img: "img/fz7.jpg",
          name: 'Кружки "Рождественская елка"',
          price: 1499,
        },
        {
          id: 7,
          img: "img/fz8.jpg",
          name: 'Кружка "Розовый горошек"',
          price: 899,
        },
        {
          id: 8,
          img: "img/fz9.jpg",
          name: 'Кружки "Рождественская"',
          price: 899,
        },
        {
          id: 9,
          img: "img/fz10.jpg",
          name: "Черная кофейная чашка",
          price: 699,
        },
        {
          id: 10,
          img: "img/fz11.jpg",
          name: 'Кружка "Джокер".',
          price: 699,
        },
        {
          id: 11,
          img: "img/fz12.jpg",
          name: '"Рыжий щенок" кружка',
          price: 999,
        },
      ],
      list2: [
        {
          id: 12,
          img: "img/fz13.jpg",
          name: '"Hello Kitty"Наборы посуды',
          price: 1500,
        },
        {
          id: 13,
          img: "img/fz14.jpg",
          name: "Милые тарелки в стиле ins",
          price: 700,
        },
        { id: 14, img: "img/fz15.jpg", name: 'Тарелка "Птичка"', price: 600 },
        {
          id: 15,
          img: "img/fz16.jpg",
          name: 'Тарелка "Цыпленок".',
          price: 600,
        },
        {
          id: 16,
          img: "img/fz17.jpg",
          name: 'Набор посуды "Панда',
          price: 2600,
        },
        { id: 17, img: "img/fz18.jpg", name: "фруктовая тарелка", price: 700 },
        {
          id: 18,
          img: "img/fz19.jpg",
          name: "Набор милых тарелок",
          price: 3500,
        },
        {
          id: 19,
          img: "img/fz20.jpg",
          name: "Тарелка с рисунком тигра",
          price: 600,
        },
        {
          id: 20,
          img: "img/fz21.jpg",
          name: "Тарелка для угощения тортом",
          price: 700,
        },
        {
          id: 21,
          img: "img/fz22.jpg",
          name: "Тарелки на день рождения",
          price: 800,
        },
        {
          id: 22,
          img: "img/fz23.jpg",
          name: "Набор обеденных тарелок с изображением животных",
          price: 1200,
        },
        {
          id: 23,
          img: "img/fz14.jpg",
          name: 'Обеденная тарелка из набора "Котенок',
          price: 3500,
        },
      ],
      list3: [
        {
          id: 24,
          img: "img/fz25.jpg",
          name: 'Украшение "Щенок и яблоко"',
          price: 650,
        },
        { id: 25, img: "img/fz26.jpg", name: "Симпатичная ложка", price: 300 },
        { id: 26, img: "img/fz27.jpg", name: 'Орнамент "Бабочка"', price: 700 },
        {
          id: 27,
          img: "img/fz28.jpg",
          name: 'Украшения "Звездный мишка"',
          price: 1000,
        },
        {
          id: 28,
          img: "img/fz29.jpg",
          name: "Керамическое ожерелье",
          price: 700,
        },
        { id: 29, img: "img/fz30.jpg", name: "Ваза с граффити", price: 1500 },
        {
          id: 30,
          img: "img/fz31.jpg",
          name: "Ваза в стиле сумочки",
          price: 1200,
        },
        {
          id: 31,
          img: "img/fz32.jpg",
          name: "Наклейки на холодильник",
          price: 300,
        },
        {
          id: 32,
          img: "img/fz33.jpg",
          name: 'Ваза "Розовый пончик"',
          price: 1600,
        },
        {
          id: 33,
          img: "img/fz34.jpg",
          name: "Милые наклейки на холодильник",
          price: 400,
        },
        { id: 34, img: "img/fz35.jpg", name: "Странная ваза", price: 1500 },
        { id: 35, img: "img/fz26.jpg", name: 'Орнамент "Кекс"', price: 560 },
      ],
    };
  },
  methods: {
    introCard(data) {
      let cartList = localStorage.getItem("cartList");
      cartList === null ? (cartList = []) : (cartList = JSON.parse(cartList));
      const isHave = cartList.filter((item) => {
        return item.id === data.id;
      });
      if (isHave.length) {
        cartList = cartList.map((item) => {
          if (item.id === data.id) {
            item.num += 1;
          }
          return item;
        });
      } else {
        data.num = 1;
        cartList.unshift(data);
      }
      localStorage.setItem("cartList", JSON.stringify(cartList));
      this.$message({
        message: "Добавить успех",
        type: "success",
      });
    },
  },
});
