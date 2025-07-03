open Lwt.Infix

let () =
  Dream.run
  @@ Dream.logger
  @@ Dream.router [
    (* Serve index.html at / *)
    Dream.get "/" (fun _ ->
      Lwt_io.(with_file ~mode:Input "src/static/index.html" read)
      >>= fun content ->
      Dream.respond ~headers:["Content-Type", "text/html"] content
    );

    (* Serve static files like JS, CSS *)
    Dream.get "/**" (Dream.static "src/static");
  ]