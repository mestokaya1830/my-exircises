<?php

namespace App\Http\Controllers;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Http\Request;

class QrCodeController extends Controller
{
    public function index()
    {
        QrCode::size(500)
            ->format('png')
            ->generate('mestokaya', public_path('images/qrcode.png'));
      return view('qrcode');
    }
}
