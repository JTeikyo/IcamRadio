const form = document.getElementById("formId");
const inputElements = form.getElementsByTagName("input");

let formData = "";
for (let i = 0; i < inputElements.length; i++) {
  const inputElement = inputElements[i];
  formData += inputElement.name + ": " + inputElement.value + "\n";
}

const fileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

fileSystem(window.TEMPORARY, 1024 * 1024, function(fs) {
  fs.root.getFile("formData.txt", {create: true}, function(fileEntry) {
    fileEntry.createWriter(function(fileWriter) {
      fileWriter.onwriteend = function(e) {
        console.log("Write completed.");
      };

      fileWriter.onerror = function(e) {
        console.error("Write failed: " + e.toString());
      };

      const data = new Blob([formData], {type: "text/plain"});
      fileWriter.write(data);
    }, function(e) {
      console.error("Error creating file writer: " + e.toString());
    });
  }, function(e) {
    console.error("Error getting file: " + e.toString());
  });
}, function(e) {
  console.error("Error requesting file system: " + e.toString());
});
