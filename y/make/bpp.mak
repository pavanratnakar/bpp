#-----------------------------------------------------------------------------
# BPP
# assumption is you're running this at locals root dir
#-----------------------------------------------------------------------------

BPP_ENV ?= ydev

BPP_BASE := $(SRCTOP)/bpp/
BPP_TARGET := /home/y/share/htdocs/static.bpp/


# not sure about these...
BPP_BUILD := $(BPP_TMP)build/
BPP_SRC := $(BPP_TMP)src/
BPP_SAMPLES := $(BPP_TMP)samples/


BPP_build:
    #[ -e /home/y/bin/node ] || $(YINST_BIN) install -branch current ynodejs06
    # cd $(BPP_BASE); exec /home/y/bin/node --file_accessdir=$(BPP_BASE) --open_basedir=$(BPP_BASE) scripts/bpp.js -build --env $(BPP_ENV)
    # todo - builds for ALL environments
    $(YROOT_BIN) $(YROOT_RUNTIME) --cmd 'sudo rm -rf $(BPP_TARGET)'
    $(YROOT_BIN) $(YROOT_RUNTIME) --cmd 'sudo mkdir $(BPP_TARGET)'
    $(YROOT_BIN) $(YROOT_RUNTIME) --cmd 'cd $(BPP_TARGET); sudo ln -s $(BPP_BASE)build/'
    $(YROOT_BIN) $(YROOT_RUNTIME) --cmd 'cd $(BPP_TARGET); sudo ln -s $(BPP_BASE)src/'