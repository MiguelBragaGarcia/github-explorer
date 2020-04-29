import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/repositories/:repository+" component={Repository}></Route>
    </Switch>
);

export default Routes;

/*
 <Route path="/repository/:repository+" component={Repository}></Route>

 Quando vamos passar por parâmetro de rotas nossos repositório temos que indicar que
 vamos nas rotas que o que estamos passando  faz parte da rota em geral igual a quando se faz no nodejs
 Nesse caso específico nosso parâmetro é composto por outra barra
 EX : rocketseat/unform
 E isso é entendido como duas rotas distintas uma rocketseat e a outra rocketseat/unform, quando isso
 acontece e não é o caso de seprarmos as rotas podemos usar o simbolo + no final para indicar que tudo que
 for passado depois do repository ainda é o parâmetro.
*/
