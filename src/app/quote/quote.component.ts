import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1,"The Way Get Started Is To Quit Talking And Begin Doing.","Author:Walt Disney","Marcus-Jean-Louis",0,0,new Date(2019,8,18)),
      new Quote(2,"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.","Author:Albert Einstein","Marcus-Jean-Louis",0,0,new Date(2019,8,18)),
      new Quote(3,"Don’t Let Yesterday Take Up Too Much Of Today.","Author:Will Rogers","Marcus-Jean-Louis",0,0,new Date(2019,8,18)),
      new Quote(4,"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.","Author:Unknown","Marcus-Jean-Louis",0,0,new Date(2019,8,18)),
      new Quote(5,"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.","Author:Vince Lombardi","Marcus-Jean-Louis",0,0,new Date(2019,8,18)),
    ]

    toogleDetails(index){
   this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
   this.quotes[index].showSubmit= !this.quotes[index].showSubmit;
 }

 upvote(index){
 this.quotes[index].upvotes++;
}
downvote(index){
 this.quotes[index].downvotes++;
}
deleteQuote(isComplete,index){
 if (isComplete){
   let toDelete=confirm(`Are you sure? ${this.quotes[index].name}`)
   if(toDelete=true){
     this.quotes.splice(index,1)
   }
}

 }


 addNewQuote(quote){
  this.quotes.push(quote)

 }

 constructor() { }

 ngOnInit() {

}
}

