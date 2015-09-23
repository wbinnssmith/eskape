const test = require('tape');
const eskape = require('./');

test('doesnt escape literal pieces of string', (t) => {
	t.plan(1);

	t.equal(eskape`
		<html>
			<div>
				<script>alert('hi');</script>
				hallo
			</div>
		</html>`,
		"\n\t\t<html>\n\t\t\t<div>\n\t\t\t\t<script>alert(\'hi\');</script>\n\t\t\t\thallo\n\t\t\t</div>\n\t\t</html>");
});

test('escapes computed values of string', (t) => {
	t.plan(1);

	var x = "<script>alert('unsafe');</script>";
	var y = "<div>hallo</div>";

	t.equal(eskape`
		<html>
			<div>
				<script>alert('safe');</script>
				${x}
				${y}
			</div>
		</html>`,
		"\n\t\t<html>\n\t\t\t<div>\n\t\t\t\t<script>alert(\'safe\');</script>\n\t\t\t\t&lt;script&gt;alert(&#39;unsafe&#39;);&lt;/script&gt;\n\t\t\t\t&lt;div&gt;hallo&lt;/div&gt;\n\t\t\t</div>\n\t\t</html>");
});
