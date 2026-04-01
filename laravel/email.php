<?php
//env file-----------------------------------
// MAIL_MAILER=smtp
// MAIL_HOST=smtp.googlemail.com
// MAIL_PORT=587
// MAIL_USERNAME=akillikentgaziantep@gmail.com
// MAIL_PASSWORD=Akilli*Kent.27
// MAIL_ENCRYPTION=tls
// MAIL_FROM_ADDRESS=akillikentgaziantep@gmail.com
// MAIL_FROM_NAME=Biappyaz

//----------------------------------------------in route
use Mail as Mail;
Route::post('/email', function(Request $req){
    $emailTo = $req->email;
    $subject = $req->subject;
    $text = $req->text;
    Mail::raw($text, function($message) use($emailTo, $subject) {
        $message->subject($subject);
        $message->to($emailTo);
    });
    return redirect('contestants');
})->name('email');


//------------------------------------------------------in controller

use Illuminate\Http\Request;
use Mail as Mail;

class FrontendEmailController extends Controller
{
    public function index(Request $request){
        $validated = $request->validate([
            'name' => 'required|min:3|max:255',
            'lastname' => 'required|min:2|max:255',
            'email' => 'required|min:8|max:255',
            'phone' => 'required|min:10|max:11',
            'message' => 'required|min:30'
        ]);
        $email = $request->email;
        $emailFrom = 'noreply@gaziantepbilisim.com.tr';
        $text = $request->text;
        $emailTo = 'hg.deliaslan@gmail.com';
        Mail::raw($text, function($message) use ($emailFrom, $emailTo, $email) {
            $message->subject($email);
            $message->from($emailFrom);
            $message->to($emailTo);
        });
        return redirect()->route('index');
    }
}


//--------------------------------------------------with send
Route::post('/email', function(Request $req){
    $emailTo = $req->email;
    $subject = $req->subject;
    $text = $req->text;

    $info = [
        "name" => "Mesto",
        "lastname" => "Mesto",
        "date" => date('Y-m-d')
    ];

    Mail::send($text, $info,function($message) use($emailTo, $subject) {
        $message->subject($subject);
        $message->to($emailTo);
    });
    return redirect('contestants');
})->name('email');