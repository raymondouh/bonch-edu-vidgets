window.onload = () => {
    let activeCourceElement;
    let courceSelect = document.getElementById('cs-gmsc-select');
    let courceList = document.getElementById('cs-gmsc-list');

    let activeGroupElement;
    let groupSelect = document.getElementById('cs-gms-select');
    let groupList = document.getElementById('cs-gms-list');

    let courceListElements = document.getElementsByClassName('cs-cource-line');
    let groupListElements = document.getElementsByClassName('cs-group-line');

    initList(courceSelect, courceList, courceListElements, activeCourceElement);
    initList(groupSelect, groupList, groupListElements, activeGroupElement);

    function initList(select, list, listElements, activeElement) {
        addEventCloseListOnDocumetClick(select, list);
        for (var i = 0; i < listElements.length; i++) {
            if (listElements[i].classList.contains('current-line')) {
                activeElement = getDataSectionOf(listElements[i]);
                select.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(!select.classList.contains('active')){
                        let event = new Event('click', {bubbles: true});
                        document.dispatchEvent(event);
                    }
                    select.classList.toggle('active');
                    toggleList(list);
                });
            } else {
                listElements[i].addEventListener('click', (e) => {
                    e.stopPropagation();
                    activeElement.innerHTML = getDataSectionOf(e.currentTarget).innerHTML;
                    closeList(select, list);
                });
            }
        }
    }

    function addEventCloseListOnDocumetClick(select, list) {
        document.addEventListener('click', (e) => {
            closeList(select, list);
        });
    }

    function getDataSectionOf(element) {
        return element.getElementsByClassName('cs-data-section')[0];
    }

    function toggleList(list) {
        list.classList.toggle('hide');
        list.classList.toggle('show');
    }

    function closeList(select, list) {
        select.classList.remove('active');
        list.classList.remove('show');
        list.classList.add('hide');
    }
}
