document.addEventListener('DOMContentLoaded', (): void => {
    //push logo website
    const containerheader_left_id: HTMLElement | null = document.getElementById('header_left_id');
    const containerfooter_container_item_1_id: HTMLElement | null = document.getElementById('footer_container_item_1_id');

    if (containerheader_left_id && containerfooter_container_item_1_id) {
        containerheader_left_id.innerHTML = `
                <div class="header_left_text">
                    <a href="http://127.0.0.1:5500/src/main.html">
                        <h1>Learn English</h1>
                        <div class="header_left_text_icon">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                    </a>
                </div>
        `;
        containerfooter_container_item_1_id.innerHTML = `
                <div class="footer_container_item_1_left">
                    <div class="header_left_text">
                        <a href="http://127.0.0.1:5500/src/main.html">
                            <h1>Learn English</h1>
                            <div class="header_left_text_icon">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="footer_container_item_1_right">
                    <p>
                        Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam eget turpis ornare,
                        euismod ligul aeget, enenatis dui.
                    </p>
                </div>
        `;
    };
});
let scrollTopNumberOfPageRegister: number = 0;
document.addEventListener('scroll', function () {
    let scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;

    // console.log('Vị trí cuộn chuột:', scrollTop);
    scrollTopNumberOfPageRegister = scrollTop;
    if (scrollTop > 10) {
        const containerHeader: HTMLElement | null = document.getElementById('header');
        const containerHeaderRightListId: HTMLElement | null = document.getElementById('header_right_list_id');
        const containerHeaderRightSearchId: HTMLElement | null = document.getElementById('header_right_search_id');
        if (containerHeader && containerHeaderRightListId && containerHeaderRightSearchId) {

            containerHeader.setAttribute('class', 'whenScroll');

            if (containerHeaderRightListId.getAttribute('class') !== 'header_right_list header_right_list-whenScroll displayNone') {
                containerHeaderRightListId.setAttribute('class', 'header_right_list header_right_list-whenScroll');
                containerHeaderRightSearchId.setAttribute('class', 'header_right_search header_right_search-whenScroll');
            };
        };
    } else {
        const containerHeader: HTMLElement | null = document.getElementById('header');
        const containerHeaderRightListId: HTMLElement | null = document.getElementById('header_right_list_id');
        const containerHeaderRightSearchId: HTMLElement | null = document.getElementById('header_right_search_id');
        if (containerHeader && containerHeaderRightListId && containerHeaderRightSearchId) {
            containerHeader.setAttribute('class', 'header');

            containerHeaderRightListId.setAttribute('class', 'header_right_list');
            containerHeaderRightSearchId.setAttribute('class', 'header_right_search');
        };
    };
});



document.addEventListener('DOMContentLoaded', (): void => {
    const containerHeaderRightSearchInputId: HTMLInputElement | null = document.getElementById('header_right_search_input_id') as HTMLInputElement;

    containerHeaderRightSearchInputId.addEventListener('input', () => {
        const inputValue: string = containerHeaderRightSearchInputId.value;
        const containerHeaderRightSearchIconDeleteId: HTMLElement | null = document.getElementById('header_right_search_icon_delete_id');
        if (inputValue.length > 0) {

            if (containerHeaderRightSearchIconDeleteId) {
                containerHeaderRightSearchIconDeleteId.setAttribute('class', ' fa-solid fa-circle-xmark header_right_search_icon_delete ');
            };
        } else {
            if (containerHeaderRightSearchIconDeleteId) {
                containerHeaderRightSearchIconDeleteId.setAttribute('class', 'fa-solid fa-circle-xmark header_right_search_icon_delete displayNone');
            };
        };
    });

    let containerNumber: string | null = '1';

    const containerHeaderRightListItemId: NodeListOf<Element> = document.querySelectorAll('#header_right_list_item_id');

    for (let i: number = 0; i < containerHeaderRightListItemId.length; i++) {
        const listItem = containerHeaderRightListItemId[i] as HTMLElement;

        listItem.onclick = () => {
            containerNumber = listItem.getAttribute('number');

            for (let i: number = 0; i < containerHeaderRightListItemId.length; i++) {
                if (containerHeaderRightListItemId[i].getAttribute('number') === containerNumber) {
                    containerHeaderRightListItemId[i].setAttribute('class', 'header_right_list_item active');
                } else {
                    containerHeaderRightListItemId[i].setAttribute('class', 'header_right_list_item');
                };
            };
        };
    };


    const containerHeaderRightMenuId: HTMLElement | null = document.getElementById('header_right_menu_id');
    const containerHeaderRightListId: HTMLElement | null = document.getElementById('header_right_list_id');
    const containerHeaderRightSearchId: HTMLElement | null = document.getElementById('header_right_search_id');
    let countMenu: number = 1;
    if (containerHeaderRightMenuId && containerHeaderRightListId && containerHeaderRightSearchId) {

        containerHeaderRightMenuId.onclick = (): void => {

            if (countMenu % 2 === 0) {

                if (scrollTopNumberOfPageRegister > 10) {
                    containerHeaderRightListId.setAttribute('class', 'header_right_list header_right_list-whenScroll  ');
                    containerHeaderRightSearchId.setAttribute('class', 'header_right_search header_right_search-whenScroll');
                    countMenu++;
                } else {
                    containerHeaderRightListId.setAttribute('class', 'header_right_list  ');
                    containerHeaderRightSearchId.setAttribute('class', 'header_right_search ');
                    countMenu++;
                };

            } else {

                containerHeaderRightListId.setAttribute('class', 'header_right_list header_right_list-whenScroll displayNone');
                containerHeaderRightSearchId.setAttribute('class', 'header_right_search header_right_search-whenScroll displayNone');
                countMenu++;
            };
        };
    };

    const containercourseSlider_content_btnLeft_id: HTMLElement | null = document.getElementById('courseSlider_content_btnLeft_id');
    const containercourseSlider_content_btnRight_id: HTMLElement | null = document.getElementById('courseSlider_content_btnRight_id');
    const containercourseSlider_content_image_id: NodeListOf<Element> = document.querySelectorAll('#courseSlider_content_image_id');
    const containercourseSlider_content_introduce_id: HTMLElement | null = document.getElementById('courseSlider_content_introduce_id');
    const containercourseSlider_list_item_id: NodeListOf<Element> = document.querySelectorAll('#courseSlider_list_item_id');


    if (containercourseSlider_content_introduce_id) {
        containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                    Tiếng Anh giao tiếp cơ bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                    Giao tiếp từ cơ bản đến nâng cao qua 60 tình huống thường gặp trong đời sống.
                    </p>
        `;
    };

    let containerNumbers: number = containercourseSlider_content_image_id.length;
    let count: number = 1;

    if (containercourseSlider_content_btnLeft_id && containercourseSlider_content_btnRight_id) {
        count = (count - 1 + containerNumbers) %
            containerNumbers;
        containercourseSlider_content_btnLeft_id.onclick = (): void => {

            containercourseSlider_content_btnLeft_id.setAttribute('class', 'courseSlider_content_btnLeft active');
            containercourseSlider_content_btnRight_id.setAttribute('class', 'courseSlider_content_btnRight');
            if (count === 0) {
                count = containerNumbers - 1;
            } else {
                count--;
            };
            if (containercourseSlider_content_image_id) {
                for (let i: number = 0; i < containercourseSlider_content_image_id.length; i++) {
                    if (Number(containercourseSlider_content_image_id[i].getAttribute('Number')) === count) {
                        containercourseSlider_content_image_id[i].setAttribute('class', 'courseSlider_content_image');
                    } else {
                        containercourseSlider_content_image_id[i].setAttribute('class', 'courseSlider_content_image displayNone');

                    };
                };
            };

            if (count === 0) {
                if (containercourseSlider_content_introduce_id) {
                    containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                    Tiếng Anh giao tiếp cơ bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                    Giao tiếp từ cơ bản đến nâng cao qua 60 tình huống thường gặp trong đời sống.
                    </p>
                    `;
                };
            } else if (count === 1) {
                if (containercourseSlider_content_introduce_id) {
                    containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                        Ngữ Pháp Cơ Bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                        Nắm vững các kiến thức ngữ pháp cơ bản trong tiếng Anh.
                    </p>
                    `;
                };
            } else if (count === 2) {
                if (containercourseSlider_content_introduce_id) {
                    containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                    Khoá Phát Âm Cơ Bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                    Cung cấp các kiến thức về phát âm từ cơ bản tới nâng cao.
                    </p>
                    `;
                };
            } else if (count === 3) {
                if (containercourseSlider_content_introduce_id) {
                    containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                    1000 Từ Vựng Tiếng Anh Cơ Bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                    Ghi nhớ nhanh hơn 1000 từ vựng cơ bản thông qua các game tương tác.
                    </p>
                    `;
                };
            };

            if (containercourseSlider_list_item_id) {
                for (let i: number = 0; i < containercourseSlider_list_item_id.length; i++) {
                    if (Number(containercourseSlider_list_item_id[i].getAttribute('number')) === count) {
                        containercourseSlider_list_item_id[i].setAttribute('class', 'courseSlider_list_item active');
                    } else {
                        containercourseSlider_list_item_id[i].setAttribute('class', 'courseSlider_list_item ');
                    };
                };
            };
        };

        containercourseSlider_content_btnRight_id.onclick = (): void => {
            containercourseSlider_content_btnLeft_id.setAttribute('class', 'courseSlider_content_btnLeft ');
            containercourseSlider_content_btnRight_id.setAttribute('class', 'courseSlider_content_btnRight active');
            count = (count + 1) % containerNumbers;
            console.log('count: ', count);
            if (containercourseSlider_content_image_id) {
                for (let i: number = 0; i < containercourseSlider_content_image_id.length; i++) {
                    if (Number(containercourseSlider_content_image_id[i].getAttribute('Number')) === count) {
                        containercourseSlider_content_image_id[i].setAttribute('class', 'courseSlider_content_image');
                    } else {
                        containercourseSlider_content_image_id[i].setAttribute('class', 'courseSlider_content_image displayNone');
                    };
                };
            };
            if (count === 0) {
                if (containercourseSlider_content_introduce_id) {
                    containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                    Tiếng Anh giao tiếp cơ bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                    Giao tiếp từ cơ bản đến nâng cao qua 60 tình huống thường gặp trong đời sống.
                    </p>
                    `;
                };
            } else if (count === 1) {
                if (containercourseSlider_content_introduce_id) {
                    containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                        Ngữ Pháp Cơ Bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                        Nắm vững các kiến thức ngữ pháp cơ bản trong tiếng Anh.
                    </p>
                    `;
                };
            } else if (count === 2) {
                if (containercourseSlider_content_introduce_id) {
                    containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                    Khoá Phát Âm Cơ Bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                    Cung cấp các kiến thức về phát âm từ cơ bản tới nâng cao.
                    </p>
                    `;
                };
            } else if (count === 3) {
                if (containercourseSlider_content_introduce_id) {
                    containercourseSlider_content_introduce_id.innerHTML = `
                    <h3 class="courseSlider_content_introduce_title">
                    1000 Từ Vựng Tiếng Anh Cơ Bản
                    </h3>
                    <p class="courseSlider_content_introduce_text">
                    Ghi nhớ nhanh hơn 1000 từ vựng cơ bản thông qua các game tương tác.
                    </p>
                    `;
                };
            };

            if (containercourseSlider_list_item_id) {
                for (let i: number = 0; i < containercourseSlider_list_item_id.length; i++) {
                    if (Number(containercourseSlider_list_item_id[i].getAttribute('number')) === count) {
                        containercourseSlider_list_item_id[i].setAttribute('class', 'courseSlider_list_item active');
                    } else {
                        containercourseSlider_list_item_id[i].setAttribute('class', 'courseSlider_list_item ');
                    };
                };
            };
        };
    };

    if (containercourseSlider_list_item_id) {
        for (let i: number = 0; i < containercourseSlider_list_item_id.length; i++) {
            let containerData: HTMLElement = containercourseSlider_list_item_id[i] as HTMLElement;

            containerData.onclick = (): void => {

            };
        };
    };
});