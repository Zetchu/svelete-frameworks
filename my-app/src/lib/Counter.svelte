<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
    function decrement() {
        count -= 1;
    }
    function reset() {
        count = 0;
    }   
</script>

<div class="counter-container">
    <h1>Welcome to my counter yupii 🥳</h1>
    
    <div class="count-display">
        The count: <span>{count}</span>
    </div>

    <div class="button-group">
        <button onclick={increment}>Increment</button>
        <button onclick={decrement}>Decrement</button>
        <button onclick={reset}>Reset</button>
    </div>
</div>

<style>
    .counter-container {
        font-family: sans-serif;
        max-width: 400px;
        margin: 2rem auto;
        padding: 2rem;
        background-color: #f9f9f9;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    h1 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 1.5rem;
    }

    .count-display {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        color: #555;
    }

    .count-display span {
        font-weight: bold;
        font-size: 2rem;
        color: #ff3e00;
        display: block;
        margin-top: 0.5rem;
    }

    .button-group {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    }

    button {
        padding: 0.8rem 1.2rem;
        font-size: 1rem;
        cursor: pointer;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 8px;
        transition: all 0.2s;
    }

    button:hover {
        background-color: #eee;
        transform: translateY(-1px);
    }

    button:active {
        transform: translateY(1px);
    }
</style>