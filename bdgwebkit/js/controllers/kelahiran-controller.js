app.controller('PermohonanCtrl', function($scope, $rootScope, KelahiranService) {


    $scope.addKelahiran = function(permohonan) {
        console.log(permohonan);
        KelahiranService.addKelahiran(permohonan).then(
            function(res) {
                // $scope.error.onAddingLesson = '';
                console.log(res);
            }
            
        );
    };

    // $scope.saveLesson = function(lesson) {
    //     LessonService.editLesson(lesson).then(
    //         function(res) {
    //             $scope.error.onModifyingLesson = '';
    //             hideModal('#modal-modify-lesson-' + lesson.id);

    //             getAllLessons();
    //         },
    //         function(res) {
    //             $scope.error.onModifyingLesson = res.message;
    //         }
    //     );
    // };

    // $scope.deleteLesson = function(lessonId) {
    //     if (confirm("Apakah Anda benar-benar ingin menghapus mata kuliah ini?")) {
    //         LessonService.deleteLesson(lessonId).then(
    //             function(res) {
    //                 $scope.error.onModifyingLesson = '';
    //                 hideModal('#modal-modify-lesson-' + lessonId);

    //                 getAllLessons();
    //             },
    //             function(res) {
    //                 $scope.error.onModifyingLesson = res.message;
    //             }
    //         );
    //     }
    // };

    // $scope.addClass = function(cls) {
    //     ClassService.addClass(cls.lessonId, cls).then(
    //         function(res) {
    //             $scope.error.onAddingClass = '';
    //             hideModal('#modal-add-class-' + cls.lessonId);

    //             getAllLessons();
    //         },
    //         function(res) {
    //             $scope.error.onAddingClass = res.message;
    //         }
    //     );
    // };

    // $scope.saveClass = function(cls) {
    //     ClassService.editClass(cls.kuliah_id, cls).then(
    //         function(res) {
    //             $scope.error.onModifyingClass = '';
    //             hideModal('#modal-modify-class-' + cls.kuliah_id + '-' + cls.id);

    //             getAllLessons();
    //         },
    //         function(res) {
    //             $scope.error.onModifyingClass = res.message;
    //         }
    //     );
    // };

    // $scope.deleteClass = function(lessonId, classId) {
    //     if (confirm("Apakah Anda benar-benar ingin menghapus kelas K" + classId + "?")) {
    //         ClassService.deleteClass(lessonId, classId).then(
    //             function(res) {
    //                 $scope.error.onModifyingClass = '';
    //                 hideModal('#modal-modify-class-' + lessonId + '-' + classId);

    //                 getAllLessons();
    //             },
    //             function(res) {
    //                 $scope.error.onModifyingClass = res.message;
    //             }
    //         );
    //     }
    // };


});