<form method="POST" action="{{ route('register') }}" enctype="multipart/form-data">
                        @csrf
                        {{-- アイコン画像プレビュー表示 --}}
                        <div class="text-center">
                            <img id="icon_img_prv" class="img-thumbnail h-25 w-25 mb-3"
                                src="{{ asset('/storage/img/profile.jpg') }}">
                        </div>
                        {{-- アイコン画像 --}}
                        <div class="row mb-3">
                            <label for="icon" class="col-md-4 col-form-label text-md-end">{{ __('アイコン') }}</label>
                            <div class="col-md-6">
                                <input id="icon" type="file" class="form-control" accept="image/*"
                                    name="icon_image_path" onchange="setImage">
                            </div>
                        </div>