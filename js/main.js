(function() { // Wrap in function to prevent accidental globals
    if (location.protocol != "data:") {
        $(window).bind('hashchange', function() {
            //window.parent.handleChildIframeUrlChange(location.hash)
        });
    }

    function WebmailViewModel() {
        // Data
        var self = this;
        self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        self.chosenFolderId = ko.observable();
        self.chosenFolderData = ko.observable();
        self.chosenMailData = ko.observable();

        // Behaviours    
        self.goToFolder = function(folder) {
            location.hash = folder;
        };
        self.goToMail = function(mail) {
            location.hash = mail.folder + '/' + mail.id;
        };

        // Client-side routes    
        Sammy(function() {
            this.get('#:folder', function() {
                self.chosenFolderId(this.params.folder);
                self.chosenMailData(null);
                $.get("/mail", {
                    folder: this.params.folder
                }, self.chosenFolderData);
            });

            this.get('#:folder/:mailId', function() {
                self.chosenFolderId(this.params.folder);
                self.chosenFolderData(null);
                $.get("/mail", {
                    mailId: this.params.mailId
                }, self.chosenMailData);
            });
            this.get('', function() {
                this.app.runRoute('get', '#Inbox')
            });
        }).run();

        // Show inbox by default
        self.goToFolder('Inbox');
    };

    ko.applyBindings(new WebmailViewModel());
})();