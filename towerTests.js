
import Monster from './src/classes/monster'
import Tower from './src/classes/tower'
import radius from './src/functions/radius'
import target from './src/functions/target'
/*
 * Tests for the tower class. Note that after towers are changed, this will need to be rewritten
 */



class TowerTester{
    constructor(){

    }

    towerTest(){
        let results = [this.towerTest1(), this.towerTest2(), this.towerTest3(), this.towerTest4()]
        let failed = false
        for(let i = 0; i < results.length; i++)
        {
            if(!results[i]){
                failed = true
                console.log("Tower module failed test " + (i+1))
            }
        }
        if (!failed){
            console.log("Tower module verified")
        }
    }

    towerTest1(){
        let monster1 = new Monster(10, 0, 0, 6, 3, 0);
        let monster2 = new Monster(20, 0, 0, 5, 1, 2);
        let monster3 = new Monster(15, 0, 0, 2, 4, 2);
        let monster4 = new Monster(5, 0, 0, 3, 2, 3);
        let monster5 = new Monster(12, 0, 0, 1, 3, 4);
        let array = [monster1, monster2, monster3, monster4, monster5]
        let turret1 = new Tower(0, 0, 0, 0, "lowestHP", 2, 2, 2);
        let expected = monster4
        let result = expected == target(array, turret1.targetingMode)
        return result
    }

    towerTest2(){
        let monster1 = new Monster(10, 0, 0, 6, 3, 0);
        let monster2 = new Monster(20, 0, 0, 5, 1, 2);
        let monster3 = new Monster(15, 0, 0, 2, 4, 2);
        let monster4 = new Monster(5, 0, 0, 3, 2, 3);
        let monster5 = new Monster(12, 0, 0, 1, 3, 4);
        let array = [monster1, monster2, monster3, monster4, monster5]
        let turret2 = new Tower(0, 0, 0, 0, "highestHP", 2, 2, 2);
        let expected = monster2
        let result = expected == target(array, turret2.targetingMode)
        return result
    }

    towerTest3(){
        let monster1 = new Monster(10, 0, 0, 6, 3, 0);
        let monster2 = new Monster(20, 0, 0, 5, 1, 2);
        let monster3 = new Monster(15, 0, 0, 2, 4, 2);
        let monster4 = new Monster(5, 0, 0, 3, 2, 3);
        let monster5 = new Monster(12, 0, 0, 1, 3, 4);
        let array = [monster1, monster2, monster3, monster4, monster5]
        let turret3 = new Tower(0, 0, 0, 0, "nearest", 2, 2, 2);
        let expected = monster5
        let result = expected == target(array, turret3.targetingMode)
        return result
    }

    towerTest4(){
        let monster1 = new Monster(10, 0, 0, 6, 3, 0);
        let monster2 = new Monster(20, 0, 0, 5, 1, 2);
        let monster3 = new Monster(15, 0, 0, 2, 4, 2);
        let monster4 = new Monster(5, 0, 0, 3, 2, 3);
        let monster5 = new Monster(12, 0, 0, 1, 3, 4);
        let array = [monster1, monster2, monster3, monster4, monster5]
        let turret4 = new Tower(0, 0, 0, 0, "furthest", 2, 2, 2);
        let expected = monster1
        let result = expected == target(array, turret4.targetingMode)
        return result
    }

}

let tester = new TowerTester()
tester.towerTest()