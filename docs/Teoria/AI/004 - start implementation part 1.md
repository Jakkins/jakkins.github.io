# pt.1 start implementation

So, little recap:

I want to code, in rust, a Recommendation system with Explicit Feedback using a Matrix factorization techniques.
The matrix will be items-features based since I have only one user.
At the starting point the matrix will be empty.

## plan

1. Initialize the User-Item Vector:
	- Create a vector representing user-item interactions.
	- Each element represents an item.
	- The value of each element represents the explicit feedback from the user for a specific item.


| | item 1 | item 2 | item 3 |
| --- | --- | --- | --- |
| user | liked (+1) | not liked (-1) | liked (+1) |

### item structure

```json
item {
	title: string; 
	link: string; 
	content: string; 
	md5: string;
}
```

When I receive an item I should probably save the md5 and if the item was liked or not, but for now I'll just hardcode everything.

## setup

```txt
rust_project
	src
		lib.rs
		experiments.rs
	tests
		experiments_tests.rs
```

### lib.rs

```rust
pub mod experiments;
```

### experiments.rs

```rust
#![allow(dead_code)]
#![allow(unused_variables)]

use valico::json_dsl;

pub struct Experiments {}

impl Experiments {
    	pub fn run() {
    		println!("hello world");
	}
}
```

### tests.rs

```rust
#[cfg(test)]
mod tests {
    use feedmee_engine::experiments::Experiments;

    #[test]
    fn test() {
        Experiments::run();
    }
}
```

### run test

```bash
cargo test --test experiments_test -- --nocapture
# -- --nocapture is used to see the output of the println command
```

# hardcode an initial example

## setup item validation

```rust
    pub fn run() {
        let json_v4_schema = json_dsl::Builder::build(|params| {
            params.req_typed("title", json_dsl::string());
            params.req_typed("link", json_dsl::string());
            params.req_typed("content", json_dsl::string());
            params.req_typed("md5", json_dsl::string());
            params.req_typed("isLiked", json_dsl::boolean());
        });
        let json_str = r#"{ 
			"title": "title1",
			"link": "link1",
			"content": "content1", 
			"md5": "md51",
			"isLiked": true 
		}"#;
        let mut json_value = serde_json::from_str::<serde_json::Value>(json_str).unwrap();
        let state = json_v4_schema.process(&mut json_value, None);
        if state.is_valid() {
            eprintln!("is a valid json")
        } else {
            eprintln!("The json schema is not valid.")
        }
    }
```
























