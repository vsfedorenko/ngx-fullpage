/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import fs from 'fs';
import path from 'path';
import traverse from 'traverse';
import loDashTemplate from 'lodash.template';
import getObject from 'getobject';
import childProcess from 'child_process';

export default class Utils {

    static root(args) {
        if (!args) {
            return path.resolve(__dirname, '../..');
        }

        args = Array.prototype.slice.call(arguments, 0);
        return path.join.apply(path, [this.root()].concat(args));
    }

    static relative(from, to) {
        if (!from) {
            return path.relative(this.root(), __dirname);
        }

        if (!to) {
            return path.relative(from, __dirname);
        }

        return path.relative(from, to);
    }

    static interpolate(obj) {
        traverse(obj).forEach(function (value) {
            if (typeof value !== 'string') {
                return value;
            }
            this.update(loDashTemplate(value)(obj));
        });

        return obj;
    }

    static get(obj, prop) {
        return getObject.get(obj, prop);
    }

    static exec(cmd) {
        return childProcess.exec(cmd);
    }

    static getFiles(dir, subdirFiles) {
        var result = subdirFiles || [];

        var files = fs.readdirSync(dir);

        for (var file in files) {
            var name = dir + '/' + files[file];
            if (fs.statSync(name).isDirectory()) {
                this.getFiles(name, result);
            } else {
                result.push(name);
            }
        }

        return result;
    }

}
