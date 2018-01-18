$(document).ready(function () {

    $("body").on("click", ".page", function() {
       $(this).addClass("open"); 
    });
    
    $('textarea').trumbowyg({        
        btns: [['formatting']],
        semantic: true,
        autogrow: true,
        removeformatPasted: true
    });
    
    

    
    
    /*
    //constants
    var wordnikAPI = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    var bighugelabsAPI = "471f719717f7f5297d2d38e0d6bcb08a";
    var localstoragekey = "WriterData";


    localStorage.setItem(localstoragekey,
        [ 
            {
                'content': "Research Methods class",
                'docID': '1'
            },
            {
                'content': "Dancing bears",
                'docID': '2'
            }
        ]
        );

    //load if any data is in storage
    //localStorage.removeItem(localstoragekey);

    var docLoader = angular.module('docLoader', []);
    docLoader.controller('docList', ['$scope', '$http', function ($scope, $http) {

        $scope.docs = localStorage.getItem(localstoragekey);
        console.log($scope.docs);
        $scope.selectedDoc = docs[0].docID;

        $scope.selectDoc = function (val) {
            $scope.selectedDoc = val.docID;
            $scope.currentDocContent = val.content;
        }

    }]);

    
    //$("#edit").html(oldcontent);
    


    //initialize
    $('#edit').editable({});
    //remove unlicensed popup
    $("#edit > div:nth-child(2)")[0].remove();


    //update word count
        function wordCount(text) {
        var s = text;
        return !s ? 0 : (s.split(/^\s+$/).length === 2 ? 0 : 2 + s.split(/\s+/).length - s.split(/^\s+/).length - s.split(/\s+$/).length);
        }
        function countAllWords() {
            var words = 0;
            $('.froala-view p').each(function (i) {
                words += wordCount($(this).text());
            });
            $("#word-count").html(words);
            if (words == 1) $("#word-count-label").html("word"); else $("#word-count-label").html("words");
        }
  

    //select paragraph on right click
    $(document).on("contextmenu", ".froala-view p", function (e) {
        $(this).toggleClass("selected");
        //return false;
    });
    

    //get selected text after half a second
    var selection_timeout;
    $(document).on('selectionchange', function (e) {
        clearTimeout(selection_timeout);
        selection_timeout = setTimeout(function () { showDictionary(getSelectionText()); }, 200);
    });
    function getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        return text;
    }

    //show dictionary
    function showDictionary(text) {
        var words = wordCount(text);

        if (words == 1) {
            $("#word-panel > span").html(text);
            $("#word-panel").css('opacity', '1');
            $("#definition").empty();
            $("#related-words").empty();

            //get definition
            $.getJSON("http://api.wordnik.com:80/v4/word.json/" + text + "/definitions?limit=1&includeRelated=true&sourceDictionaries=wiktionary&useCanonical=true&includeTags=false&api_key=" + wordnikAPI, function (data) {
                $("#definition").html(data[0]["text"]);
            });

            var wordcount = 0;
            //get related words
            $.getJSON("http://words.bighugelabs.com/api/2/"+bighugelabsAPI+"/" + text + "/json", function (data) {                
                for (var propName in data) {
                    if (data.hasOwnProperty(propName)) {
                        for (var propName2 in data[propName])
                        {
                            for (var propName3 in data[propName][propName2]) {
                                createRelatedWord(data[propName][propName2][propName3]);
                            }
                        }
                    }
                }

                $("#definition, #related-words li").css("opacity", 0);                
                $("#definition, #related-words li").offset();                
                $("#definition, #related-words li").css("transition", "opacity 1s").css("opacity", 1);

                function createRelatedWord(text){
                    if (wordcount<18) { $("#related-words").append('<li>' + text + '</li>')}
                    wordcount += 1;
                }
            });

        }
        else {
            $("#word-panel").css('opacity', '0');
        }

    }

    
    var change_timeout;
    $(".froala-wrapper > div").bind("DOMSubtreeModified", function (e) {
        console.log(e);
        //refresh document word count
        countAllWords();

        //prep for saving
        $("#save-status").css("opacity", 0);
        clearTimeout(change_timeout);

        //save
        change_timeout = setTimeout(function () {

            //var controllerElement = document.querySelector('body');
            //var controllerScope = angular.element(controllerElement).scope();
            //console.log(controllerScope.user);

            //localStorage.setItem(localstoragekey, $(".froala-wrapper > div").html());
            $("#save-status").css("opacity", 1);
        }, 1000);

    });


    countAllWords();*/

});