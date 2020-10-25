function getTextID(text, id) {
    document.getElementById(`${id}`).innerHTML = text;
}

function getTextClass(text, class_name) {
    document.getElementsByClassName(class_name)[0].innerHTML = text;
}


window.addEventListener("load", function (event) {

    document.getElementById('btn_lang_en').addEventListener('click', function () {
        getTextID(home_p1_en, 'home_p1');
        getTextID(home_p2_en, 'home_p2');
        getTextID(home_p3_en, 'home_p3');
        
        getTextID(feature1_en, 'feature1');
        getTextID(feature2_en, 'feature2');
        getTextID(feature3_en, 'feature3');
        getTextID(feature4_en, 'feature4');
        getTextID(feature5_en, 'feature5');
        getTextID(feature6_en, 'feature6');

        getTextID(title_feature_en,'title_feature')
        getTextID(contact_title_en,'contact-title');
        getTextID(popouver_content_en,'popover-description')

    });
    document.getElementById('btn_lang_pt').addEventListener('click', function () {
        getTextID(home_p1_pt, 'home_p1');
        getTextID(home_p2_pt, 'home_p2');
        getTextID(home_p3_pt, 'home_p3');

        getTextID(feature1_pt, 'feature1');
        getTextID(feature2_pt, 'feature2');
        getTextID(feature3_pt, 'feature3');
        getTextID(feature4_pt, 'feature4');
        getTextID(feature5_pt, 'feature5');
        getTextID(feature6_pt, 'feature6');

        getTextID(title_feature_pt,'title_feature');
        getTextID(contact_title_pt,'contact-title');
        getTextID(popouver_content_pt,'popover-description');


    });

    document.getElementById('btn_lang_en').click();
});