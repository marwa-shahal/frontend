import Cookie from 'universal-cookie'
const cookie = new Cookie();

class CookieService{
 get(key){
    return cookie.get(key);
 }

 set(key, value){
    cookie.set(key, value);
 }

 remove(key){
    cookie.remove(key);
 }
}
const cookieService = new CookieService()
export default cookieService;