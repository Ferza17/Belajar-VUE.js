<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-New-Quotes @quoteAdded="newQuote"></app-New-Quotes>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuotes from './components/NewQuotes.vue';



    export default {
        data : ()=>{
            return {
                quotes:[
                    'Just a Quote to see something'
                ],
                maxQuotes : 10
            }
        },
        methods: {
            newQuote(quote){
                return this.quotes.length >= this.maxQuotes ? alert('kebanyakan') : this.quotes.push(quote);
                
            },
            deleteQuote(index){
                this.quotes.splice(index,1);
            }
        },
        components:{
            appHeader : Header,
            appQuoteGrid: QuoteGrid,
            appNewQuotes : NewQuotes
        }
    }

</script>

<style scoped>
    
</style>
