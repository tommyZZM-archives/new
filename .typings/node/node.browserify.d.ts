// Type definitions for Node.js v4.x
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <http://typescriptlang.org>, DefinitelyTyped <https://github.com/borisyankov/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/************************************************
*                                               *
*          Node.js v4.x for Browserify          *
*                                               *
************************************************/

//interface Error {
//    stack?: string;
//}

// compat for TypeScript 1.5.3
// if you use with --target es3 or --target es5 and use below definitions,
// use the lib.es6.d.ts that is bundled with TypeScript 1.5.3.

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: any;
declare var global: any;

//declare var __filename: string;
//declare var __dirname: string;

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "buffer" {
    export var INSPECT_MAX_BYTES: number;

    export interface Buffer {
        [index: number]: number;
        write(string: string, offset?: number, length?: number, encoding?: string): number;
        toString(encoding?: string, start?: number, end?: number): string;
        toJSON(): any;
        length: number;
        equals(otherBuffer: Buffer): boolean;
        compare(otherBuffer: Buffer): number;
        copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
        slice(start?: number, end?: number): Buffer;
        writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
        writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
        writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
        writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
        readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
        readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
        readIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
        readIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
        readUInt8(offset: number, noAsset?: boolean): number;
        readUInt16LE(offset: number, noAssert?: boolean): number;
        readUInt16BE(offset: number, noAssert?: boolean): number;
        readUInt32LE(offset: number, noAssert?: boolean): number;
        readUInt32BE(offset: number, noAssert?: boolean): number;
        readInt8(offset: number, noAssert?: boolean): number;
        readInt16LE(offset: number, noAssert?: boolean): number;
        readInt16BE(offset: number, noAssert?: boolean): number;
        readInt32LE(offset: number, noAssert?: boolean): number;
        readInt32BE(offset: number, noAssert?: boolean): number;
        readFloatLE(offset: number, noAssert?: boolean): number;
        readFloatBE(offset: number, noAssert?: boolean): number;
        readDoubleLE(offset: number, noAssert?: boolean): number;
        readDoubleBE(offset: number, noAssert?: boolean): number;
        writeUInt8(value: number, offset: number, noAssert?: boolean): number;
        writeUInt16LE(value: number, offset: number, noAssert?: boolean): number;
        writeUInt16BE(value: number, offset: number, noAssert?: boolean): number;
        writeUInt32LE(value: number, offset: number, noAssert?: boolean): number;
        writeUInt32BE(value: number, offset: number, noAssert?: boolean): number;
        writeInt8(value: number, offset: number, noAssert?: boolean): number;
        writeInt16LE(value: number, offset: number, noAssert?: boolean): number;
        writeInt16BE(value: number, offset: number, noAssert?: boolean): number;
        writeInt32LE(value: number, offset: number, noAssert?: boolean): number;
        writeInt32BE(value: number, offset: number, noAssert?: boolean): number;
        writeFloatLE(value: number, offset: number, noAssert?: boolean): number;
        writeFloatBE(value: number, offset: number, noAssert?: boolean): number;
        writeDoubleLE(value: number, offset: number, noAssert?: boolean): number;
        writeDoubleBE(value: number, offset: number, noAssert?: boolean): number;
        fill(value: any, offset?: number, end?: number): Buffer;
    }

    export var Buffer: {
        /**
         * Allocates a new buffer containing the given {str}.
         *
         * @param str String to store in buffer.
         * @param encoding encoding to use, optional.  Default is 'utf8'
         */
        new (str: string, encoding?: string): Buffer;
        /**
         * Allocates a new buffer of {size} octets.
         *
         * @param size count of octets to allocate.
         */
        new (size: number): Buffer;
        /**
         * Allocates a new buffer containing the given {array} of octets.
         *
         * @param array The octets to store.
         */
        new (array: Uint8Array): Buffer;
        /**
         * Allocates a new buffer containing the given {array} of octets.
         *
         * @param array The octets to store.
         */
        new (array: any[]): Buffer;
        prototype: Buffer;
        /**
         * Returns true if {obj} is a Buffer
         *
         * @param obj object to test.
         */
        isBuffer(obj: any): obj is Buffer;
        /**
         * Returns true if {encoding} is a valid encoding argument.
         * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
         *
         * @param encoding string to test.
         */
        isEncoding(encoding: string): boolean;
        /**
         * Gives the actual byte length of a string. encoding defaults to 'utf8'.
         * This is not the same as String.prototype.length since that returns the number of characters in a string.
         *
         * @param string string to test.
         * @param encoding encoding used to evaluate (defaults to 'utf8')
         */
        byteLength(string: string, encoding?: string): number;
        /**
         * Returns a buffer which is the result of concatenating all the buffers in the list together.
         *
         * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
         * If the list has exactly one item, then the first item of the list is returned.
         * If the list has more than one item, then a new Buffer is created.
         *
         * @param list An array of Buffer objects to concatenate
         * @param totalLength Total length of the buffers when concatenated.
         *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
         */
        concat(list: Buffer[], totalLength?: number): Buffer;
        /**
         * The same as buf1.compare(buf2).
         */
        compare(buf1: Buffer, buf2: Buffer): number;
    };

}

declare module "querystring" {
    export function stringify(obj: any, sep?: string, eq?: string): string;
    export function parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): any;
    export function escape(str: string): string;
    export function unescape(str: string): string;
}

declare module "events" {
    export class EventEmitter/* implements NodeJS.EventEmitter*/ {
        static listenerCount(emitter: EventEmitter, event: string): number;

        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
   }
}

declare module "http" {
    import * as events from "events";
    //import * as net from "net";
    import {Buffer} from "buffer"
    import * as stream from "stream";

    export interface RequestOptions {
        protocol?: string;
        host?: string;
        hostname?: string;
        family?: number;
        port?: number
        localAddress?: string;
        socketPath?: string;
        method?: string;
        path?: string;
        headers?: { [key: string]: any };
        auth?: string;
    }

    /**
     * @deprecated Use IncomingMessage
     */
    export interface ClientRequest extends events.EventEmitter, stream.Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        write(chunk: any, encoding?: string): void;
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface IncomingMessage extends events.EventEmitter, stream.Readable {
        httpVersion: string;
        headers: any;
        rawHeaders: string[];
        trailers: any;
        rawTrailers: any;
        setTimeout(msecs: number, callback: Function): {
            ref() : void;
            unref() : void;
        };
        /**
         * Only valid for request obtained from http.Server.
         */
        method?: string;
        /**
         * Only valid for request obtained from http.Server.
         */
        url?: string;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusCode?: number;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusMessage?: string;
        //socket: net.Socket;
    }
    /**
     * @deprecated Use IncomingMessage
     */
    export interface ClientResponse extends IncomingMessage { }

    export var METHODS: string[];

    export var STATUS_CODES: {
        [errorCode: number]: string;
        [errorCode: string]: string;
    };
    export function request(options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
    export function get(options: any, callback?: (res: IncomingMessage) => void): ClientRequest;
}

declare module "zlib" {
    import {Buffer} from "buffer"
    import * as stream from "stream";
    export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

    export interface Gzip extends stream.Transform { }
    export interface Gunzip extends stream.Transform { }
    export interface Deflate extends stream.Transform { }
    export interface Inflate extends stream.Transform { }
    export interface DeflateRaw extends stream.Transform { }
    export interface InflateRaw extends stream.Transform { }
    export interface Unzip extends stream.Transform { }

    export function createGzip(options?: ZlibOptions): Gzip;
    export function createGunzip(options?: ZlibOptions): Gunzip;
    export function createDeflate(options?: ZlibOptions): Deflate;
    export function createInflate(options?: ZlibOptions): Inflate;
    export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    export function createInflateRaw(options?: ZlibOptions): InflateRaw;
    export function createUnzip(options?: ZlibOptions): Unzip;

    export function deflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function deflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function gzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function gunzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gunzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function unzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function unzipSync(buf: Buffer, options?: ZlibOptions): any;

    // Constants
    export var Z_NO_FLUSH: number;
    export var Z_PARTIAL_FLUSH: number;
    export var Z_SYNC_FLUSH: number;
    export var Z_FULL_FLUSH: number;
    export var Z_FINISH: number;
    export var Z_BLOCK: number;
    export var Z_TREES: number;
    export var Z_OK: number;
    export var Z_STREAM_END: number;
    export var Z_NEED_DICT: number;
    export var Z_ERRNO: number;
    export var Z_STREAM_ERROR: number;
    export var Z_DATA_ERROR: number;
    export var Z_MEM_ERROR: number;
    export var Z_BUF_ERROR: number;
    export var Z_VERSION_ERROR: number;
    export var Z_NO_COMPRESSION: number;
    export var Z_BEST_SPEED: number;
    export var Z_BEST_COMPRESSION: number;
    export var Z_DEFAULT_COMPRESSION: number;
    export var Z_FILTERED: number;
    export var Z_HUFFMAN_ONLY: number;
    export var Z_RLE: number;
    export var Z_FIXED: number;
    export var Z_DEFAULT_STRATEGY: number;
    export var Z_BINARY: number;
    export var Z_TEXT: number;
    export var Z_ASCII: number;
    export var Z_UNKNOWN: number;
    export var Z_DEFLATED: number;
    export var Z_NULL: number;
}

declare module "os" {
    export function tmpdir(): string;
    export function hostname(): string;
    export function type(): string;
    export function platform(): string;
    export function arch(): string;
    export function release(): string;
    export function uptime(): number;
    export function loadavg(): number[];
    export function totalmem(): number;
    export function freemem(): number;
    export function cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[];
    export function networkInterfaces(): any;
    export var EOL: string;
}

// http module with request only
declare module "https" {
    //import * as tls from "tls";
    import * as events from "events";
    import * as http from "http";

    export interface RequestOptions extends http.RequestOptions{
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: string;
        rejectUnauthorized?: boolean;
        secureProtocol?: string;
    }
    export function request(options: RequestOptions, callback?: (res: http.IncomingMessage) =>void ): http.ClientRequest;
    export function get(options: RequestOptions, callback?: (res: http.IncomingMessage) =>void ): http.ClientRequest;
}

declare module "punycode" {
    export function decode(string: string): string;
    export function encode(string: string): string;
    export function toUnicode(domain: string): string;
    export function toASCII(domain: string): string;
    export var ucs2: ucs2;
    interface ucs2 {
        decode(string: string): number[];
        encode(codePoints: number[]): string;
    }
    export var version: any;
}

declare module "vm" {
    export interface Context { }
    export interface Script {
        runInThisContext(): void;
        runInNewContext(sandbox?: Context): void;
    }
    export function runInThisContext(code: string, filename?: string): void;
    export function runInNewContext(code: string, sandbox?: Context, filename?: string): void;
    export function runInContext(code: string, context: Context, filename?: string): void;
    export function createContext(initSandbox?: Context): Context;
    export function createScript(code: string, filename?: string): Script;
}

declare module "url" {
    export interface Url {
        href?: string;
        protocol?: string;
        auth?: string;
        hostname?: string;
        port?: string;
        host?: string;
        pathname?: string;
        search?: string;
        query?: any; // string | Object
        slashes?: boolean;
        hash?: string;
        path?: string;
    }

    export function parse(urlStr: string, parseQueryString?: boolean , slashesDenoteHost?: boolean ): Url;
    export function format(url: Url): string;
    export function resolve(from: string, to: string): string;
}

declare module "path" {

    /**
     * A parsed path object generated by path.parse() or consumed by path.format().
     */
    export interface ParsedPath {
        /**
         * The root of the path such as '/' or 'c:\'
         */
        root: string;
        /**
         * The full directory path such as '/home/user/dir' or 'c:\path\dir'
         */
        dir: string;
        /**
         * The file name including extension (if any) such as 'index.html'
         */
        base: string;
        /**
         * The file extension (if any) such as '.html'
         */
        ext: string;
        /**
         * The file name without extension (if any) such as 'index'
         */
        name: string;
    }

    /**
     * Normalize a string path, reducing '..' and '.' parts.
     * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
     *
     * @param p string path to normalize.
     */
    export function normalize(p: string): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     *
     * @param paths string paths to join.
     */
    export function join(...paths: any[]): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     *
     * @param paths string paths to join.
     */
    export function join(...paths: string[]): string;
    /**
     * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
     *
     * Starting from leftmost {from} paramter, resolves {to} to an absolute path.
     *
     * If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.
     *
     * @param pathSegments string paths to join.  Non-string arguments are ignored.
     */
    export function resolve(...pathSegments: any[]): string;
    /**
     * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
     *
     * @param path path to test.
     */
    export function isAbsolute(path: string): boolean;
    /**
     * Solve the relative path from {from} to {to}.
     * At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
     *
     * @param from
     * @param to
     */
    export function relative(from: string, to: string): string;
    /**
     * Return the directory name of a path. Similar to the Unix dirname command.
     *
     * @param p the path to evaluate.
     */
    export function dirname(p: string): string;
    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     *
     * @param p the path to evaluate.
     * @param ext optionally, an extension to remove from the result.
     */
    export function basename(p: string, ext?: string): string;
    /**
     * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
     * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
     *
     * @param p the path to evaluate.
     */
    export function extname(p: string): string;
    /**
     * The platform-specific file separator. '\\' or '/'.
     */
    export var sep: string;
    /**
     * The platform-specific file delimiter. ';' or ':'.
     */
    export var delimiter: string;
    /**
     * Returns an object from a path string - the opposite of format().
     *
     * @param pathString path to evaluate.
     */
    export function parse(pathString: string): ParsedPath;
    /**
     * Returns a path string from an object - the opposite of parse().
     *
     * @param pathString path to evaluate.
     */
    export function format(pathObject: ParsedPath): string;

    export module posix {
      export function normalize(p: string): string;
      export function join(...paths: any[]): string;
      export function resolve(...pathSegments: any[]): string;
      export function isAbsolute(p: string): boolean;
      export function relative(from: string, to: string): string;
      export function dirname(p: string): string;
      export function basename(p: string, ext?: string): string;
      export function extname(p: string): string;
      export var sep: string;
      export var delimiter: string;
      export function parse(p: string): ParsedPath;
      export function format(pP: ParsedPath): string;
    }

    export module win32 {
      export function normalize(p: string): string;
      export function join(...paths: any[]): string;
      export function resolve(...pathSegments: any[]): string;
      export function isAbsolute(p: string): boolean;
      export function relative(from: string, to: string): string;
      export function dirname(p: string): string;
      export function basename(p: string, ext?: string): string;
      export function extname(p: string): string;
      export var sep: string;
      export var delimiter: string;
      export function parse(p: string): ParsedPath;
      export function format(pP: ParsedPath): string;
    }
}

declare module "string_decoder" {
    import {Buffer} from "buffer"
    export interface NodeStringDecoder {
        write(buffer: Buffer): string;
        detectIncompleteChar(buffer: Buffer): number;
    }
    export var StringDecoder: {
        new (encoding: string): NodeStringDecoder;
    };
}

declare module "crypto" {
    import {Buffer} from "buffer"

    export interface CredentialDetails {
        pfx: string;
        key: string;
        passphrase: string;
        cert: string;
        ca: any;    //string | string array
        crl: any;   //string | string array
        ciphers: string;
    }
    export interface Credentials { context?: any; }
    export function createCredentials(details: CredentialDetails): Credentials;
    export function createHash(algorithm: string): Hash;
    export function createHmac(algorithm: string, key: string): Hmac;
    export function createHmac(algorithm: string, key: Buffer): Hmac;
    interface Hash {
        update(data: any, input_encoding?: string): Hash;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    interface Hmac {
        update(data: any, input_encoding?: string): Hmac;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    export function createCipher(algorithm: string, password: any): Cipher;
    export function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
    interface Cipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    export function createDecipher(algorithm: string, password: any): Decipher;
    export function createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
    interface Decipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    //export function createSign(algorithm: string): Signer;
    //interface Signer extends NodeJS.WritableStream {
    //    update(data: any): void;
    //    sign(private_key: string, output_format: string): string;
    //}
    //export function createVerify(algorith: string): Verify;
    //interface Verify extends NodeJS.WritableStream {
    //    update(data: any): void;
    //    verify(object: string, signature: string, signature_format?: string): boolean;
    //}
    export function createDiffieHellman(prime_length: number): DiffieHellman;
    export function createDiffieHellman(prime: number, encoding?: string): DiffieHellman;
    interface DiffieHellman {
        generateKeys(encoding?: string): string;
        computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
        getPrime(encoding?: string): string;
        getGenerator(encoding: string): string;
        getPublicKey(encoding?: string): string;
        getPrivateKey(encoding?: string): string;
        setPublicKey(public_key: string, encoding?: string): void;
        setPrivateKey(public_key: string, encoding?: string): void;
    }
    export function getDiffieHellman(group_name: string): DiffieHellman;
    export function pbkdf2(password: string, salt: string, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2(password: string, salt: string, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2Sync(password: string, salt: string, iterations: number, keylen: number) : Buffer;
    export function pbkdf2Sync(password: string, salt: string, iterations: number, keylen: number, digest: string) : Buffer;
    export function randomBytes(size: number): Buffer;
    export function randomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
    export function pseudoRandomBytes(size: number): Buffer;
    export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
}

declare module "stream" {
    import * as events from "events";
    import {Buffer} from "buffer";
    import {EventEmitter} from "events"

    export interface WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer:Buffer|string, cb?:Function): boolean;
        write(str:string, encoding?:string, cb?:Function): boolean;
        end(): void;
        end(buffer:Buffer, cb?:Function): void;
        end(str:string, cb?:Function): void;
        end(str:string, encoding?:string, cb?:Function): void;
    }

    export interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): string|Buffer;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }

    export interface ReadWriteStream extends ReadableStream, WritableStream {}

    export interface Stream extends events.EventEmitter {
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
    }

    export interface ReadableOptions {
        highWaterMark?: number;
        encoding?: string;
        objectMode?: boolean;
    }

    export class Readable extends events.EventEmitter implements ReadableStream {
        readable: boolean;
        constructor(opts?: ReadableOptions);
        _read(size: number): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: any): void;
        wrap(oldStream: ReadableStream): ReadableStream;
        push(chunk: any, encoding?: string): boolean;
    }

    export interface WritableOptions {
        highWaterMark?: number;
        decodeStrings?: boolean;
        objectMode?: boolean;
    }

    export class Writable extends events.EventEmitter implements WritableStream {
        writable: boolean;
        constructor(opts?: WritableOptions);
        _write(chunk: any, encoding: string, callback: Function): void;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export interface DuplexOptions extends ReadableOptions, WritableOptions {
        allowHalfOpen?: boolean;
    }

    // Note: Duplex extends both Readable and Writable.
    export class Duplex extends Readable implements ReadWriteStream {
        writable: boolean;
        constructor(opts?: DuplexOptions);
        _write(chunk: any, encoding: string, callback: Function): void;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export interface TransformOptions extends ReadableOptions, WritableOptions {}

    // Note: Transform lacks the _read and _write methods of Readable/Writable.
    export class Transform extends events.EventEmitter implements ReadWriteStream {
        readable: boolean;
        writable: boolean;
        constructor(opts?: TransformOptions);
        _transform(chunk: any, encoding: string, callback: Function): void;
        _flush(callback: Function): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: any): void;
        wrap(oldStream: ReadableStream): ReadableStream;
        push(chunk: any, encoding?: string): boolean;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export class PassThrough extends Transform {}
}

declare module "util" {
    export interface InspectOptions {
        showHidden?: boolean;
        depth?: number;
        colors?: boolean;
        customInspect?: boolean;
    }

    export function format(format: any, ...param: any[]): string;
    export function debug(string: string): void;
    export function error(...param: any[]): void;
    export function puts(...param: any[]): void;
    export function print(...param: any[]): void;
    export function log(string: string): void;
    export function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
    export function inspect(object: any, options: InspectOptions): string;
    export function isArray(object: any): boolean;
    export function isRegExp(object: any): boolean;
    export function isDate(object: any): boolean;
    export function isError(object: any): boolean;
    export function inherits(constructor: any, superConstructor: any): void;
    export function debuglog(key:string): (msg:string,...param: any[])=>void;
}

declare module "assert" {
    function internal (value: any, message?: string): void;
    module internal {
        export class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;

            constructor(options?: {message?: string; actual?: any; expected?: any;
                                  operator?: string; stackStartFunction?: Function});
        }

        export function fail(actual?: any, expected?: any, message?: string, operator?: string): void;
        export function ok(value: any, message?: string): void;
        export function equal(actual: any, expected: any, message?: string): void;
        export function notEqual(actual: any, expected: any, message?: string): void;
        export function deepEqual(actual: any, expected: any, message?: string): void;
        export function notDeepEqual(acutal: any, expected: any, message?: string): void;
        export function strictEqual(actual: any, expected: any, message?: string): void;
        export function notStrictEqual(actual: any, expected: any, message?: string): void;
        export function deepStrictEqual(actual: any, expected: any, message?: string): void;
        export function notDeepStrictEqual(actual: any, expected: any, message?: string): void;
        export var throws: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export var doesNotThrow: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export function ifError(value: any): void;
    }

    export = internal;
}

//declare module "tty" {
//    import * as net from "net";
//
//    export function isatty(fd: number): boolean;
//    export interface ReadStream extends net.Socket {
//        isRaw: boolean;
//        setRawMode(mode: boolean): void;
//    }
//    export interface WriteStream extends net.Socket {
//        columns: number;
//        rows: number;
//    }
//}

declare module "domain" {
    import * as events from "events";

    export class Domain extends events.EventEmitter {
        run(fn: Function): void;
        add(emitter: events.EventEmitter): void;
        remove(emitter: events.EventEmitter): void;
        bind(cb: (err: Error, data: any) => any): any;
        intercept(cb: (data: any) => any): any;
        dispose(): void;

        addListener(event: string, listener: Function): Domain;
        on(event: string, listener: Function): Domain;
        once(event: string, listener: Function): Domain;
        removeListener(event: string, listener: Function): Domain;
        removeAllListeners(event?: string): Domain;
    }

    export function create(): Domain;
}

declare module "constants" {
    export var E2BIG: number;
    export var EACCES: number;
    export var EADDRINUSE: number;
    export var EADDRNOTAVAIL: number;
    export var EAFNOSUPPORT: number;
    export var EAGAIN: number;
    export var EALREADY: number;
    export var EBADF: number;
    export var EBADMSG: number;
    export var EBUSY: number;
    export var ECANCELED: number;
    export var ECHILD: number;
    export var ECONNABORTED: number;
    export var ECONNREFUSED: number;
    export var ECONNRESET: number;
    export var EDEADLK: number;
    export var EDESTADDRREQ: number;
    export var EDOM: number;
    export var EEXIST: number;
    export var EFAULT: number;
    export var EFBIG: number;
    export var EHOSTUNREACH: number;
    export var EIDRM: number;
    export var EILSEQ: number;
    export var EINPROGRESS: number;
    export var EINTR: number;
    export var EINVAL: number;
    export var EIO: number;
    export var EISCONN: number;
    export var EISDIR: number;
    export var ELOOP: number;
    export var EMFILE: number;
    export var EMLINK: number;
    export var EMSGSIZE: number;
    export var ENAMETOOLONG: number;
    export var ENETDOWN: number;
    export var ENETRESET: number;
    export var ENETUNREACH: number;
    export var ENFILE: number;
    export var ENOBUFS: number;
    export var ENODATA: number;
    export var ENODEV: number;
    export var ENOENT: number;
    export var ENOEXEC: number;
    export var ENOLCK: number;
    export var ENOLINK: number;
    export var ENOMEM: number;
    export var ENOMSG: number;
    export var ENOPROTOOPT: number;
    export var ENOSPC: number;
    export var ENOSR: number;
    export var ENOSTR: number;
    export var ENOSYS: number;
    export var ENOTCONN: number;
    export var ENOTDIR: number;
    export var ENOTEMPTY: number;
    export var ENOTSOCK: number;
    export var ENOTSUP: number;
    export var ENOTTY: number;
    export var ENXIO: number;
    export var EOPNOTSUPP: number;
    export var EOVERFLOW: number;
    export var EPERM: number;
    export var EPIPE: number;
    export var EPROTO: number;
    export var EPROTONOSUPPORT: number;
    export var EPROTOTYPE: number;
    export var ERANGE: number;
    export var EROFS: number;
    export var ESPIPE: number;
    export var ESRCH: number;
    export var ETIME: number;
    export var ETIMEDOUT: number;
    export var ETXTBSY: number;
    export var EWOULDBLOCK: number;
    export var EXDEV: number;
    export var WSAEINTR: number;
    export var WSAEBADF: number;
    export var WSAEACCES: number;
    export var WSAEFAULT: number;
    export var WSAEINVAL: number;
    export var WSAEMFILE: number;
    export var WSAEWOULDBLOCK: number;
    export var WSAEINPROGRESS: number;
    export var WSAEALREADY: number;
    export var WSAENOTSOCK: number;
    export var WSAEDESTADDRREQ: number;
    export var WSAEMSGSIZE: number;
    export var WSAEPROTOTYPE: number;
    export var WSAENOPROTOOPT: number;
    export var WSAEPROTONOSUPPORT: number;
    export var WSAESOCKTNOSUPPORT: number;
    export var WSAEOPNOTSUPP: number;
    export var WSAEPFNOSUPPORT: number;
    export var WSAEAFNOSUPPORT: number;
    export var WSAEADDRINUSE: number;
    export var WSAEADDRNOTAVAIL: number;
    export var WSAENETDOWN: number;
    export var WSAENETUNREACH: number;
    export var WSAENETRESET: number;
    export var WSAECONNABORTED: number;
    export var WSAECONNRESET: number;
    export var WSAENOBUFS: number;
    export var WSAEISCONN: number;
    export var WSAENOTCONN: number;
    export var WSAESHUTDOWN: number;
    export var WSAETOOMANYREFS: number;
    export var WSAETIMEDOUT: number;
    export var WSAECONNREFUSED: number;
    export var WSAELOOP: number;
    export var WSAENAMETOOLONG: number;
    export var WSAEHOSTDOWN: number;
    export var WSAEHOSTUNREACH: number;
    export var WSAENOTEMPTY: number;
    export var WSAEPROCLIM: number;
    export var WSAEUSERS: number;
    export var WSAEDQUOT: number;
    export var WSAESTALE: number;
    export var WSAEREMOTE: number;
    export var WSASYSNOTREADY: number;
    export var WSAVERNOTSUPPORTED: number;
    export var WSANOTINITIALISED: number;
    export var WSAEDISCON: number;
    export var WSAENOMORE: number;
    export var WSAECANCELLED: number;
    export var WSAEINVALIDPROCTABLE: number;
    export var WSAEINVALIDPROVIDER: number;
    export var WSAEPROVIDERFAILEDINIT: number;
    export var WSASYSCALLFAILURE: number;
    export var WSASERVICE_NOT_FOUND: number;
    export var WSATYPE_NOT_FOUND: number;
    export var WSA_E_NO_MORE: number;
    export var WSA_E_CANCELLED: number;
    export var WSAEREFUSED: number;
    export var SIGHUP: number;
    export var SIGINT: number;
    export var SIGILL: number;
    export var SIGABRT: number;
    export var SIGFPE: number;
    export var SIGKILL: number;
    export var SIGSEGV: number;
    export var SIGTERM: number;
    export var SIGBREAK: number;
    export var SIGWINCH: number;
    export var SSL_OP_ALL: number;
    export var SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
    export var SSL_OP_CIPHER_SERVER_PREFERENCE: number;
    export var SSL_OP_CISCO_ANYCONNECT: number;
    export var SSL_OP_COOKIE_EXCHANGE: number;
    export var SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
    export var SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
    export var SSL_OP_EPHEMERAL_RSA: number;
    export var SSL_OP_LEGACY_SERVER_CONNECT: number;
    export var SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
    export var SSL_OP_MICROSOFT_SESS_ID_BUG: number;
    export var SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
    export var SSL_OP_NETSCAPE_CA_DN_BUG: number;
    export var SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
    export var SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
    export var SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
    export var SSL_OP_NO_COMPRESSION: number;
    export var SSL_OP_NO_QUERY_MTU: number;
    export var SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
    export var SSL_OP_NO_SSLv2: number;
    export var SSL_OP_NO_SSLv3: number;
    export var SSL_OP_NO_TICKET: number;
    export var SSL_OP_NO_TLSv1: number;
    export var SSL_OP_NO_TLSv1_1: number;
    export var SSL_OP_NO_TLSv1_2: number;
    export var SSL_OP_PKCS1_CHECK_1: number;
    export var SSL_OP_PKCS1_CHECK_2: number;
    export var SSL_OP_SINGLE_DH_USE: number;
    export var SSL_OP_SINGLE_ECDH_USE: number;
    export var SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
    export var SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
    export var SSL_OP_TLS_BLOCK_PADDING_BUG: number;
    export var SSL_OP_TLS_D5_BUG: number;
    export var SSL_OP_TLS_ROLLBACK_BUG: number;
    export var ENGINE_METHOD_DSA: number;
    export var ENGINE_METHOD_DH: number;
    export var ENGINE_METHOD_RAND: number;
    export var ENGINE_METHOD_ECDH: number;
    export var ENGINE_METHOD_ECDSA: number;
    export var ENGINE_METHOD_CIPHERS: number;
    export var ENGINE_METHOD_DIGESTS: number;
    export var ENGINE_METHOD_STORE: number;
    export var ENGINE_METHOD_PKEY_METHS: number;
    export var ENGINE_METHOD_PKEY_ASN1_METHS: number;
    export var ENGINE_METHOD_ALL: number;
    export var ENGINE_METHOD_NONE: number;
    export var DH_CHECK_P_NOT_SAFE_PRIME: number;
    export var DH_CHECK_P_NOT_PRIME: number;
    export var DH_UNABLE_TO_CHECK_GENERATOR: number;
    export var DH_NOT_SUITABLE_GENERATOR: number;
    export var NPN_ENABLED: number;
    export var RSA_PKCS1_PADDING: number;
    export var RSA_SSLV23_PADDING: number;
    export var RSA_NO_PADDING: number;
    export var RSA_PKCS1_OAEP_PADDING: number;
    export var RSA_X931_PADDING: number;
    export var RSA_PKCS1_PSS_PADDING: number;
    export var POINT_CONVERSION_COMPRESSED: number;
    export var POINT_CONVERSION_UNCOMPRESSED: number;
    export var POINT_CONVERSION_HYBRID: number;
    export var O_RDONLY: number;
    export var O_WRONLY: number;
    export var O_RDWR: number;
    export var S_IFMT: number;
    export var S_IFREG: number;
    export var S_IFDIR: number;
    export var S_IFCHR: number;
    export var S_IFLNK: number;
    export var O_CREAT: number;
    export var O_EXCL: number;
    export var O_TRUNC: number;
    export var O_APPEND: number;
    export var F_OK: number;
    export var R_OK: number;
    export var W_OK: number;
    export var X_OK: number;
    export var UV_UDP_REUSEADDR: number;
}
