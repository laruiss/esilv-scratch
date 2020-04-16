FROM node:13.13.0

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Configure apt and install packages
RUN echo "Updating apt" \
    && apt-get update \
    && echo "Installing utils, wget, git and zsh" \
    && apt-get -y install --no-install-recommends apt-utils wget git zsh 2>&1 \
    && echo "Setting zsh as default shell" \
    && chsh -s $(which zsh) \
    && echo "Installing oh-my-zsh" \
    && sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" \
    #
    # Clean up
    && echo "Cleaning up" \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ENV PATH=${PATH}:/usr/local/share/npm-global/bin

# Set french date & time
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo "Europe/Paris" > /etc/timezone

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog

EXPOSE 3000

CMD ["npm", "run", "dev"]
