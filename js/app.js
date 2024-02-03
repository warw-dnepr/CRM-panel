


function today() { /////////funk now day
   let date = new Date();
   let y = date.getFullYear();
   let m = date.getMonth() + 1;
   if (m < 10) m = '0' + m;
   let d = date.getDate();
   if (d < 10) d = '0' + d;
   let tod = d + '/' + m + '/' + y;
   return tod;
}
let now_day = today();

////////calendar
$(document).ready(function () {
   function calendar(id, year, month) {
      var Dlast = new Date(year, month + 1, 0).getDate(),
         D = new Date(year, month, Dlast),
         DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
         DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
         calendar = '<tr>',
         month = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

      if (DNfirst != 0) {
         for (var i = 1; i < DNfirst; i++) calendar += '<td>';
      } else {
         for (var i = 0; i < 6; i++) calendar += '<td>';
      }
      for (var i = 1; i <= Dlast; i++) {
         let m = D.getMonth() + 1;
         let d = i;
         if (m < 10) {
            m = `0${m}`;
         }
         if (d < 10) {
            d = `0${d}`;
         }
         if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += `<td id="${d}/${m}/${D.getFullYear()}" class="today admin-calendar-item">` + i;
         } else {
            calendar += `<td id="${d}/${m}/${D.getFullYear()}" class="admin-calendar-item">` + i;
         }
         if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
         }
      }
      for (var i = DNlast; i < 7; i++) calendar += '<td> ';

      document.querySelector('#' + id + ' tbody').innerHTML = calendar;
      document.querySelector('#' + id + ' thead td:nth-child(2)').id = `${id}/{D.getMonth()}/${D.getFullYear()}`
      document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
      document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
      document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
      if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
         // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
         document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
      }
   }
   calendar("calendar", new Date().getFullYear(), new Date().getMonth());
   // переключатель минус месяц
   document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
      calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
   }
   // переключатель плюс месяц
   document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
      calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
   }
})

///////header
$(function () {
   $('.header-log').click(function () {
      $('.log-out').slideToggle()
   })
   $('.orders-data').html(now_day.replaceAll('/', '.'))
})
//////////////////main

let opinies = [
   {
      name_opinies: 'ivan',
      data_opinies: '21/12/2022',
      contact: '+38(099)645-54-34',
      mail: 'mail@d.d',
      body_opinies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum illum architecto voluptatum natus praesentium voluptatem optio, quidem ratione. Itaque illo odio atque sit commodi fuga quod alias blanditiis cum.'
   },
   {
      name_opinies: 'ivan',
      data_opinies: '21/12/2022',
      contact: '+38(099)645-54-34',
      mail: 'mail@d.d',
      body_opinies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum illum architecto voluptatum natus praesentium voluptatem optio, quidem ratione. Itaque illo odio atque sit commodi fuga quod alias blanditiis cum.'
   },
   {
      name_opinies: 'ivan',
      data_opinies: '21/12/2022',
      contact: '+38(099)645-54-34',
      mail: 'mail@d.d',
      body_opinies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum illum architecto voluptatum natus praesentium voluptatem optio, quidem ratione. Itaque illo odio atque sit commodi fuga quod alias blanditiis cum.'
   },
   {
      name_opinies: 'ivan',
      data_opinies: '21/12/2022',
      contact: '+38(099)645-54-34',
      mail: 'mail@d.d',
      body_opinies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum illum architecto voluptatum natus praesentium voluptatem optio, quidem ratione. Itaque illo odio atque sit commodi fuga quod alias blanditiis cum.'
   },
   {
      name_opinies: 'ivan',
      data_opinies: '21/12/2022',
      contact: '+38(099)645-54-34',
      mail: 'mail@d.d',
      body_opinies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum illum architecto voluptatum natus praesentium voluptatem optio, quidem ratione. Itaque illo odio atque sit commodi fuga quod alias blanditiis cum.'
   },
   {
      name_opinies: 'ivan',
      data_opinies: '21/12/2022',
      contact: '+38(099)645-54-34',
      mail: 'mail@d.d',
      body_opinies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum illum architecto voluptatum natus praesentium voluptatem optio, quidem ratione. Itaque illo odio atque sit commodi fuga quod alias blanditiis cum.'
   },
];

let orders = [
   {
      data: '22/12/2023',
      item: 'Товар-1',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
   {
      data: '22/12/2023',
      item: 'Товар-2',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
   {
      data: '22/12/2023',
      item: 'Товар-3',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
   {
      data: '22/12/2023',
      item: 'Товар-4',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
   {
      data: '22/12/2023',
      item: 'Товар-5',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
   {
      data: '22/12/2023',
      item: 'Товар-6',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
   {
      data: '22/12/2023',
      item: 'Товар-7',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
   {
      data: '22/12/2023',
      item: 'Товар-8',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
   {
      data: '22/12/2023',
      item: 'Товар-9',
      client: 'ivan',
      contact: '+38(098)322-23-33',
      mail: 'mail@g.com',
   },
]
$(document).ready(function () {
   opinies.forEach(element => {
      $('.body-main-opinies').prepend(`<div class="opinies-box">
   <div class="name-data">
   <span class="name-opinies">${element.name_opinies}</span> 
   <span class="data-opinies">${element.data_opinies.replaceAll('/', '.')}</span>
   <span><a href="tel:${element.contact}">${element.contact}</a></span>
   <span><a href="mailto:${element.mail}">${element.mail}</span>
   </div>
   <div class="body-opinies">${element.body_opinies}</div>
   </div>`)
   });
})//////////////////

$(document).ready(function () {
   orders.forEach(element => {
      $('.orders-body').prepend(`<div class=order-body-div>
   <p><span class='orders-item-adaptive'>Дата:</span> ${element.data.replaceAll('/', '.')}</p>
   <p><span class='orders-item-adaptive'>Товар:</span> ${element.item}</p>
   <p><span class='orders-item-adaptive'>Замовник:</span> ${element.client}</p>
   <p><span class='orders-item-adaptive'>Контакт:</span> <a href="tel:${element.contact}">${element.contact}</a></p>
   <p><span class='orders-item-adaptive'>Пошта:</span> <a href="mailto:${element.mail}">${element.mail}</a></p>
   <p class='orders-edit-btn'>Редагувати</p>
   </div>`)
   });
})//////////////////

/////////////////////new worker
/////////mask for date
$(document).ready(function () {
   var input = document.querySelectorAll('#mydata')[0];

   var dateInputMask = function dateInputMask(elm) {

      elm.addEventListener('keyup', function (e) {
         if (e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
         }

         var len = elm.value.length;

         if (len !== 1 || len !== 3) {
            if (e.keyCode == 47) {
               e.preventDefault();
            }
         }
         if (len === 2) {
            if (e.keyCode !== 8 && e.keyCode !== 46) {
               elm.value = elm.value + '/';
            }
         }

         if (len === 5) {
            if (e.keyCode !== 8 && e.keyCode !== 46) {
               elm.value = elm.value + '/';
            }
         }
      });
   };

   dateInputMask(input);
});
///////////////


$(document).ready(function () {
   $("#userPhone").mask("+38( 999 ) 999-99-99");
});
/////////////////workers

let all_workers = [
   {
      id_worker: '22/12/2023',
      name: 'Ivan ivanovich',
      img_worker: 'img/logo.jpg'
   },
   {
      id_worker: '22/12/2023',
      name: 'Ivan ivanovich',
      img_worker: 'img/logo.jpg'
   },
   {
      id_worker: '22/12/2023',
      name: 'Ivan ivanovich',
      img_worker: 'img/logo.jpg'
   },
   {
      id_worker: '22/12/2023',
      name: 'Ivan ivanovich',
      img_worker: 'img/logo.jpg'
   },
]
$(document).ready(function () {
   all_workers.forEach(master => {
      $('.worker-body').prepend(`
   <ul class='worker-body-u'>
   <li class="all-masters-img-name"><img style="width: 40px; height: 40px;" src="${master.img_worker}"> ${master.name}</li> 
   <li><form method="POST"><button name="edit" type="submite">Редагувати</button><input type="hidden" name="id_master" value="${master.id_worker}"></input></form></li>
   </ul`)
   })
})

let zvitu = [
   {
      date: '02/12/2023',
      order: 'Товар-1',
      name_client: 'Keviaaaaaaan',
      contact: '+38(096)415-04-33',
      mail: 'mail@kevin.you',
      id_order: 'img/logo.jpg',
      price: '0000',
   },
   {
      date: '22/11/2023',
      order: 'Товар-2',
      name_client: 'ivan',
      contact: '+38(019)155-33-34',
      mail: 'mail@now.you',
      id_order: 'img/logo.jpg',
      price: '0000',
   },
   {
      date: '12/01/2023',
      order: 'Товар-3',
      name_client: 'Armen',
      contact: '+38(091)451-39-34',
      mail: 'mail@ee.ua',
      id_order: 'img/logo.jpg',
      price: '0000',
   },
   {
      date: '02/02/2022',
      order: 'Товар-4',
      name_client: 'aaaaaa',
      contact: '+38(099)455-34-34',
      mail: 'mail@fkaa.me',
      id_order: 'img/logo.jpg',
      price: '0000',
   },
   {
      date: '22/12/2023',
      order: 'Товар-5',
      name_client: 'bbbbb',
      contact: '+38(099)455-34-31',
      mail: 'mail@f.you',
      id_order: 'img/logo.jpg',
      price: '0000',
   },
]

$(document).ready(function () {
   zvitu.forEach(element => { ////////all звіти
      $('.zvitu-body').prepend(`<tbody><tr class='zvitu-main-ul'>
      <input class='input-for-search' type='hidden' value='${element.date}${element.order}'>
<td class='zvitu-li-1'>${element.date.replaceAll('/', '.')}</td>
<td class='zvitu-li-2'>${element.order}</td>
<td class='zvitu-li-3'>${element.price} грн.</td>
<td class='zvitu-edit-btn'>Деталі
<input class='id_order_input' type='hidden' value='${element.id_order}'>
<input class='name_input' type='hidden' value='${element.name_client}'>
<input class='mail_input' type='hidden' value='${element.mail}'>
<input class='contact_input' type='hidden' value='${element.contact}'>
</td>
</tr></tbody>`)
   });
});

////////////////
$(document).ready(function () {
   $('.zvitu-head-input').on('input', function () {
      let val = this.value.replace(/ /g, '').toLowerCase();
      if (val != '') {
         $('.input-for-search').each(function () {
            if ($(this).val().toLowerCase().replaceAll('.', '').toString().replace(/ /g, '').search(val) == -1) {
               $(this.parentNode).slideUp()
            } else {
               $(this.parentNode).show()
            }
         })
      } else {
         $('.zvitu-main-ul').slideDown()
      }
   })
})

///////
$(document).ready(function () {
   $('.zvitu-edit-btn').click(function () {
      $('.zvitu-info-wind').fadeIn('fast');
      $('.info-name').html($(this).children('.name_input').val())
      $('.info-phone').html($(this).children('.contact_input').val())
      $('.info-mail').html($(this).children('.mail_input').val())
   })
   $('.closed-info-wind').click(function () {
      $('.zvitu-info-wind').fadeOut();
   });
})
///////////////clients baza

$(document).ready(function () {
   zvitu.forEach(element => { ////////all звіти
      $('.clients-body').prepend(`<ul class='clients-ul'>
      <input class='input-client-search' type='hidden' value='${element.name_client}${element.contact}${element.mail}'>
<li>${element.name_client}</li>
<li><a href="tel:${element.contact}">${element.contact}</a></li>
<li><a href="mailto:${element.mail}">${element.mail}</li>
<input class='id_order_input' type='hidden' value='${element.id_order}'>
<input class='name_input' type='hidden' value='${element.order}'>
<input class='mail_input' type='hidden' value='${element.data}'>
</ul>`)
   });
});

////////////////
$(document).ready(function () {
   $('.clients-input-main').on('input', function () {
      let val = this.value.replace(/ /g, '').toLowerCase();
      if (val != '') {
         $('.input-client-search').each(function () {
            if ($(this).val().toLowerCase().replaceAll('(', '').replaceAll(')', '').replaceAll('+', '').toString().replace(/ /g, '').search(val) == -1) {
               $(this.parentNode).slideUp()
            } else {
               $(this.parentNode).show()
            }
         })
      } else {
         $('.clients-ul').slideDown()
      }
   })
})
///////////////////////////setting
$(function(){
   $('.setting-box-1-p').click(function(){
      $('.setting-box-1-input').slideToggle()
   })
   $('.setting-box-2-p').click(function(){
      $('.setting-box-2-input').slideToggle()
   })
})