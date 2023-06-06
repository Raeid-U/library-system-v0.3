var libTechBookNum = [ ];
var libTechTitle = [ ];
var libTechAuthor = [ ];
var libTechType = [ ];
var libTechPubDate = [ ];
var libTechAvail = [ ];

function refreshFunction(){
    if (JSON.parse(localStorage.getItem("libTechBookNumKey")) != null){
        libTechBookNum = JSON.parse(localStorage.getItem("libTechBookNumKey"));
        libTechTitle = JSON.parse(localStorage.getItem("libTechTitleKey"));
        libTechAuthor = JSON.parse(localStorage.getItem("libTechAuthorKey"));
        libTechType = JSON.parse(localStorage.getItem("libTechTypeKey"));
        libTechPubDate = JSON.parse(localStorage.getItem("libTechPubDateKey"));
        libTechAvail = JSON.parse(localStorage.getItem("libTechAvailKey"))
    }
}

function addNewBook(addBookForm){
refreshFunction();
libTechBookNum.push(addBookForm.numBookL.value);
libTechTitle.push(addBookForm.tilBookL.value);
libTechAuthor.push(addBookForm.autBookL.value);
libTechType.push(addBookForm.typBookL.value);
libTechPubDate.push(addBookForm.pubBookL.value);
libTechAvail.push("Yes")

        localStorage.setItem("libTechBookNumKey", JSON.stringify(libTechBookNum));
        localStorage.setItem("libTechTitleKey", JSON.stringify(libTechTitle));
        localStorage.setItem("libTechAuthorKey", JSON.stringify(libTechAuthor));
        localStorage.setItem("libTechTypeKey", JSON.stringify(libTechType));
        localStorage.setItem("libTechPubDateKey", JSON.stringify(libTechPubDate));
        localStorage.setItem("libTechAvailKey", JSON.stringify(libTechAvail));
alert(`The Book " ${addBookForm.tilBookL.value} " has been added` )
}