  $(function ()
                {
                    $("#wizard").steps({
                        headerTag: "h2",
                        bodyTag: "section",
                        transitionEffect: "slideLeft",
                        autoFocus: true ,
                        onStepChanging: function (event, currentIndex, newIndex)
                        {
                            form.validate().settings.ignore = ":disabled,:hidden";
                            return form.valid();
                        },
                        onFinishing: function (event, currentIndex)
                        {
                            form.validate().settings.ignore = ":disabled";
                            return form.valid();
                        },
                        onFinished: function (event, currentIndex)
                        {
                            alert("Submitted!");
                        }
                    });
                });
