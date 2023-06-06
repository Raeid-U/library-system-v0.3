// Variables to store student search data
var studBookNum;
var studTitle;
var studAuthor;
var studType0;
var studType1;
var studType2;
var studPubDate;

function getStudentSearchData(searchForm) {
    // Retrieve student search data from the form
    studBookNum = searchForm.numBookS.value;
    studTitle = searchForm.tilBookS.value;
    studAuthor = searchForm.autBookS.value;
    studType0 = searchForm.typBookS0.checked;
    studType1 = searchForm.typBookS1.checked;
    studType2 = searchForm.typBookS2.checked;
    studPubDate = searchForm.pubBookS.value;

    // Store student search data in localStorage
    localStorage.setItem("studBookNumKey", JSON.stringify(studBookNum));
    localStorage.setItem("studTitleKey", JSON.stringify(studTitle));
    localStorage.setItem("studAuthorKey", JSON.stringify(studAuthor));

    // Assign meaningful values to studType0, studType1, and studType2 based on checkbox selection
    if (studType0) {
        studType0 = "Fiction";
    }
    if (studType1) {
        studType1 = "Non-Fiction";
    }
    if (studType2) {
        studType2 = "Graphic Novel";
    }

    // Store student search type data in localStorage
    localStorage.setItem("studTypeKey0", JSON.stringify(studType0));
    localStorage.setItem("studTypeKey1", JSON.stringify(studType1));
    localStorage.setItem("studTypeKey2", JSON.stringify(studType2));

    // Store student search publication date in localStorage
    localStorage.setItem("studPubDateKey", JSON.stringify(studPubDate));
}
