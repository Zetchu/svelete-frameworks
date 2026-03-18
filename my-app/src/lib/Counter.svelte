<h1>Welcome to my counter yupii 🥳</h1>
<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<button onclick={increment}>
    Count: {count}
</button>