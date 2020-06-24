import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getCanActivateChild } from '@angular/router/src/utils/preactivation';

@Injectable({
    providedIn: 'root'
  })
export class RouteGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private router:Router){}

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            //console.log("STATE: "+state);
            let routeObj = next.toString().substr(11,next.toString().length);
            let routeArr = routeObj.split(',');
            let route = routeArr[0].replace("'",'');
            switch(route){
                case 'admin/ingresar':
                    this.loadScript("assets/js/login.js").then(()=>{})
                    break;
                case 'admin/ingresar/inicio':
                    if(localStorage.getItem('logged') == undefined){
                        this.loadScript('assets/js/login.js').then(()=>{})
                        this.router.navigateByUrl('/admin/ingresar');
                        return;
                    }
                    this.loadScript("assets/js/admin-inicio.js").then(()=>{});
                    this.loadScript("assets/js/products-admin.js").then(()=>{});
                    break;
                case 'productos':
                    console.log("PRODUCTOS")
                    this.loadScript("assets/js/onepage-details.js").then(()=>{
                        this.loadScript("assets/js/products.js").then(()=>{});
                    })
                    break;
            }
            return true;
        }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            return true;
        }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
            return true;
        }
    loadScript(url, details=false){
        return new Promise((resolve,reject)=>{
            const script = document.createElement("script");
            script.src = url;
            script.onload = ()=>{
                resolve();
            };
            (details) ? document.getElementsByTagName("body")[0].appendChild(script) : document.getElementsByTagName("head")[0].appendChild(script);
            resolve();
               
            })
          }

}