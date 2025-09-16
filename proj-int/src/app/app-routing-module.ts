import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//imports
const routes: Routes = [

{
path:'contador',
loadChildren: () => import('./contador/contador-module').then(m=> m.ContadorModule)

},

{
path:'estrutura',
loadChildren: () => import('./estrutura/estrutura-module').then(m=> m.EstruturaModule)

},

{
  path: 'produto',
  loadChildren: () => import('./produto/produto-routing-module').then(m => m.ProdutoRoutingModule)
},
{
  path: 'produtosmodule',
  loadChildren: () => import('./produtos-module/produtos-module-routing-module').then(m => m.ProdutosModuleRoutingModule)
},
{
  path: 'dados',
  loadChildren: () => import('./dados/dados-routing-module').then(m => m.DadosRoutingModule)
},
{
  path: 'funcionario',
  loadChildren: () => import('./funcionario/funcionario-routing-module').then(m => m.FuncionarioRoutingModule)
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
