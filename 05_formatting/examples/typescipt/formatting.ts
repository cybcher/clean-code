// Example 1.
const REGEXP = "'''.+?'''";

class Pattern {
    public static readonly MULTILINE = 10;
    public static readonly DOTALL = 5;
  
    constructor() {
        this.MULTILINE = "";
        this.DOTALL = "";
    }

    compile(pattern, other) {
        this.pattern = pattern;
        this.other = other;
        return {
            matcher: (text) => {
                return {
                    find: () => {

                    },
                    group: () => {

                    }
                }
            }
        }
    }0
};

class ParentWidget {
    addChildWidget() {}
    childHtml() {}
};

class BoldWidget extends ParentWidget {
    static get REGEXP() {
        return REGEXP;
    }

    static get pattern() {
        return Pattern.compile("'''(.+?)'''",
            Pattern.MULTILINE + Pattern.DOTALL
        );
    }

    constructor(parent, text) {
        super(parent);
        this.pattern = Pattern.compile(
            "'''(.+?)'''",
            Pattern.MULTILINE + Pattern.DOTALL
        );

        const match = pattern.matcher(text);
        match.find();
        addChildWidget(match.group(1))
    }

    render() {
        const html = new String("<b>");
        html.append(childHtml()).append("</b>")

        return html.toString();
    }
}