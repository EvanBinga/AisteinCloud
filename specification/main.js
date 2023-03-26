const tabsBtn = document.querySelectorAll('#buttonTabs');
const tabsItems = document.querySelectorAll('.info-device');


tabsBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function(item){
            item.classList.remove('active')
        });

        tabsItems.forEach(function(item){
            item.classList.remove('active')
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    })
});


// popup

const popupBtn = document.querySelector('#button-popup');
const popUp = document.querySelector('.popup-one');
const popUpClouse = document.querySelector('.clouse-popup');


document.querySelector('#button-popup').onclick = function() {
    document.querySelector('.popup-one').classList.toggle('active');
  };

  document.querySelector('.clouse-popup').onclick = function() {
    document.querySelector('.popup-one').classList.remove('active');
  };


  document.querySelector('#button-popup-two').onclick = function() {
    document.querySelector('.popup-two').classList.toggle('active');
  };

  document.querySelector('.clouse-popup-two').onclick = function() {
    document.querySelector('.popup-two').classList.remove('active');
  };

  document.querySelector('#buttonCameraOne').onclick = function() {
    document.querySelector('.popup-tree').classList.toggle('active');
  };

  document.querySelector('.clouse-popup-tree').onclick = function() {
    document.querySelector('.popup-tree').classList.remove('active');
  };

  document.querySelector('#buttonCameraTwo').onclick = function() {
    document.querySelector('.popup-fore').classList.toggle('active');
  };

  document.querySelector('.clouse-popup-fore').onclick = function() {
    document.querySelector('.popup-fore').classList.remove('active');
  };


  document.querySelector('#buttonCameraTree').onclick = function() {
    document.querySelector('.popup-vife').classList.toggle('active');
  };

  document.querySelector('.clouse-popup-vife').onclick = function() {
    document.querySelector('.popup-vife').classList.remove('active');
  };
