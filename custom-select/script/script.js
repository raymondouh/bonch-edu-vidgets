window.onload = () => {
    let groupSelect = document.getElementById('cs-gms-select');
    let groupList = document.getElementById('cs-gms-list');
    let courceSelect = document.getElementById('cs-gmsc-select');
    let courceList = document.getElementById('cs-gmsc-list');

    groupSelect.addEventListener('click', () => {
        groupSelect.classList.toggle('active');
        toggleList(groupList);
        closeList(courceSelect, courceList);
    });

    courceSelect.addEventListener('click', () => {
        courceSelect.classList.toggle('active');
        toggleList(courceList);
        closeList(groupSelect, groupList);
    });
}

function toggleList(list){
    list.classList.toggle('hide');
    list.classList.toggle('show');
}

function closeList(select, list){
    select.classList.remove('active');
    list.classList.remove('show');
    list.classList.add('hide');
}
