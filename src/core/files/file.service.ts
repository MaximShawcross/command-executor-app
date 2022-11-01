import { promises } from "fs";
import { dirname, isAbsolute, join } from "path";

class FileService {
    // checking file by existance
    private async isExist(pathToFile: string) {
        try {
            // stat meghod, for check file existance
            await promises.stat(pathToFile)
            return true
        } catch (error) {
            return false;
        }
    }
    // method for get the file path  
    public getFilePath( path: string, name: string, extentions: string ): string {
        if(isAbsolute(path)) {
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + "/" + name + "." + extentions); 
    }
    //delete file by the way, if it exist
    async deleteFileIfExist(path: string) {
        //  
        if( await this.isExist(path) ) {
            promises.unlink(path);
        }
    }
}

export default FileService;