function saveDocument() {
    var title = document.getElementById('fileTitle').value;
    var documentFile = document.getElementById('file').value;
    const resumeFile = {
      title: title,
      document: documentFile,
    };
    console.log(resumeFile, 'resumeFile');
  }