"use strict";

/*
  Composition:

  Задание при помощи композиции создать объекты 4х типов:

  functions:
    - MakeBackendMagic
    - MakeFrontendMagic
    - MakeItLooksBeautiful
    - DistributeTasks
    - DrinkSomeTea
    - WatchYoutube
    - Procrastinate

  BackendDeveloper = MakeBackendMagic + DrinkSomeTea + Procrastinate
  FrontendDeveloper = MakeFrontendMagic + DrinkSomeTea + WatchYoutube
  Designer = MakeItLooksBeautiful + WatchYoutube + Procrastinate
  ProjectManager = DistributeTasks + Procrastinate + DrinkSomeTea

  ProjectManager(name,gender,age) => { name, gender, age, type: 'project', rate: '15/h'}

*/
