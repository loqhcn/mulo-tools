

const fs = require('fs')
const path = require('path');

class FileSystem {
    //是否为文件
    isFile(dir) {
        try {
            return fs.lstatSync(dir).isFile();
        } catch (error) {
            return false;
        }
    }
    //是否为目录
    isDir(dir) {
        try {
            return fs.lstatSync(dir).isDirectory();
        } catch (error) {
            return false;
        }
    }

    //读取文件夹下面指定类型的文件
    getFiles(fileType, dir) {
        //路径
        let pathDir = path.resolve(dir)
        let dirs = fs.readdirSync(pathDir, { withFileTypes: true });
        let data = {
            dir: pathDir,
            dirs: dirs
        }
        let files = [];
        if (!dirs) {
            return files;
        }
        //console.log(dirs);
        //读取文件
        dirs.forEach(function (file, index) {
            //是否为文件
            if (file.isFile()) {
                files.push(path.resolve(pathDir, file.name))
            }

        })
        return files;
    }

}
module.exports = new FileSystem();
