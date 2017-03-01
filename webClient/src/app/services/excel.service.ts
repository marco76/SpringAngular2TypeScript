export class ExcelService {


    constructor() {

    }

    exportToCSV(JSONListItemsToPublish : any, fileName : string, columns : string[]){
        let self = this;

        const items = JSONListItemsToPublish;

        let arrayToPublish = [];

        for (let i = 0; i < items.length; i++) {

            let keys = Object.keys(items[i]);
            let csvRow : string[];

            for ( let keyId = 0; keyId < keys.length; keyId++) {
                if (columns.indexOf(keys[keyId]) > -1) {
                    csvRow[keys[keyId]] = items[i][keys[keyId]];
                }
            }

            arrayToPublish.push(csvRow);
        }

        const replace = (key:string, value:string) => value === null ? '' : value;
        const header = Object.keys(arrayToPublish[0]);

        let csv = arrayToPublish.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replace)).join(';'));
        csv.unshift(header.join(';'));
        let data = csv.join('\r\n');
        self.download(fileName, data);
    }

    downloadFile(filename : string, data : string, format : string) {
        let blob = new Blob([data], {type: format});

        if(window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        }
        else{
            let elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }

    download(filename : string, data : any) {
        this.downloadFile(filename, data, 'text/csv');
    }
}
 