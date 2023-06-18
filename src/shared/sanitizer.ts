import DOMPurify from "dompurify";

export function sanitizer(textToSanitize: string){
    return DOMPurify.sanitize(textToSanitize)
}